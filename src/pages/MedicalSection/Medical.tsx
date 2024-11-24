import  { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import backgroundImage from "../../assets/Ellipse 38.png";

const chartData = [
  { name: "sat",    uv: 4000, pv: 2400, amt: 2400 },
  { name: "sun", uv: 3000, pv: 1398, amt: 2210 },
  { name: "mon", uv: 2000, pv: 9800, amt: 2290 },
  { name: "tue", uv: 2780, pv: 3908, amt: 2000 },
  { name: "wed", uv: 1890, pv: 4800, amt: 2181 },
  { name: "thu", uv: 2390, pv: 3800, amt: 2500 },
];

const Medical = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  const handleClick = () => {
    setIsScrollable((prev) => !prev); // تغيير حالة التمرير
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        {/* الكروت */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-4 rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
            }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"
              style={{
                backdropFilter: "blur(2px)",
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-normal text-white py-3 mt-2 px-3">
                Doctors
              </h3>
              <p className="text-white px-3 pb-3 font-bold text-[32px]">3</p>
            </div>
          </div>
        ))}
      </div>

      {/* القسم الثاني */}
      <div className="grid grid-cols-12 gap-3 mt-4">
        <div className="col-span-12 md:col-span-6">
          <div
            className={`w-full ${
              isScrollable ? "overflow-x-auto" : ""
            } transition-all duration-300`}
            onClick={handleClick}
          >
            <BarChart
              width={500}
              height={300}
              data={chartData}
              barSize={10}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* تغيير لون العمود الأول */}
              <Bar dataKey="pv" fill="#0017C2" /> {/* لون برتقالي */}
              {/* تغيير لون العمود الثاني */}
              <Bar dataKey="uv" fill="#3FBDF1" /> {/* لون أخضر */}
            </BarChart>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          {/* محتوى إضافي يمكن إضافته هنا */}
        </div>
      </div>
    </div>
  );
};

export default Medical;
