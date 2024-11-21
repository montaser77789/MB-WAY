import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";

interface AnnualData {
  [key: number]: {
    // هنا نضيف توقيع الفهرس لعدد السنوات
    name: string;
    value: number;
  };
}
// البيانات الشهرية
const data = [
  { name: "Jan", value: 500, year: 2024 },
  { name: "Feb", value: 2000, year: 2024 },
  { name: "Mar", value: 1500, year: 2024 },
  { name: "Apr", value: 1000, year: 2024 },
  { name: "May", value: 800, year: 2024 },
  { name: "Jun", value: 600, year: 2024 },
  { name: "Jul", value: 400, year: 2024 },
  { name: "Aug", value: 300, year: 2024 },
  { name: "Sep", value: 500, year: 2024 },
  { name: "Oct", value: 2000, year: 2024 },
  { name: "Nov", value: 1500, year: 2024 },
  { name: "Dec", value: 1000, year: 2024 },
  // بيانات سنة أخرى (مثال)
  { name: "Jan", value: 600, year: 2025 },
  { name: "Feb", value: 2100, year: 2025 },
  { name: "Mar", value: 1600, year: 2025 },
  { name: "Apr", value: 1100, year: 2025 },
  // استكمال البيانات للسنة الثانية
];

const getAnnualData = (): { name: string; value: number }[] => {
  const annualData: AnnualData = {};

  data.forEach((item) => {
    const { year, value } = item;
    if (!annualData[year]) {
      annualData[year] = { name: year.toString(), value: 0 };
    }
    annualData[year].value += value;
  });

  return Object.values(annualData);
};

const MyLineChart = () => {
  const { t } = useTranslation();

  const [sortBy, setSortBy] = useState("monthly");
  const chartData = sortBy === "monthly" ? data : getAnnualData();

  return (
    <>
      <div className="flex w-full  justify-between ">
        <div className=" ">
          <div>
            <div className="flex items-center gap-2 p-2">
              <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
              <p className="text-blue_maincolor font-bold">
                {t("overallPerformance")}
              </p>
            </div>
          </div>
        </div>
        <select
          className="border border-gray_maincolor rounded-md p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="monthly">{t("monthly")}</option>
          <option value="annual">{t("yearly")}</option>
        </select>
      </div>
      <div
        style={{ width: "100%", height: 300, overflowX: "auto" }}
        className="scrollbar-thumb-blue_maincolor sidebar-scrollbar "
      >
        <ResponsiveContainer width="150%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="rgba(0, 0, 255, 0.3)"
              strokeWidth={3}
              filter="url(#blue-shadow)"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        <svg width="0" height="0">
          <defs>
            <filter id="blue-shadow" x="0" y="0" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="6"
                floodColor="blue"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default MyLineChart;
