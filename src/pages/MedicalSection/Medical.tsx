import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import backgroundImage from "../../assets/Ellipse 38.png";
import img from "../../assets/rb_2151532310 1.png";
import { CgArrowUp } from "react-icons/cg";

const chartData = [
  { name: "sat", uv: 4000, pv: 2400, amt: 2400 },
  { name: "sun", uv: 3000, pv: 1398, amt: 2210 },
  { name: "mon", uv: 2000, pv: 9800, amt: 2290 },
  { name: "tue", uv: 2780, pv: 3908, amt: 2000 },
  { name: "wed", uv: 1890, pv: 4800, amt: 2181 },
  { name: "thu", uv: 2390, pv: 3800, amt: 2500 },
];

const chartData2 = [
  { name: "Cosmetic", pv: 2400 },
  { name: "Slimming", pv: 1398 },
  { name: "Eye surgery", pv: 9800 },
  { name: "Oncology", pv: 3908 },
  { name: "Orthopedic", pv: 4800 },
  { name: "Dental", pv: 3800 },
  { name: "Physical therapy", pv: 3800 },
];

const Medical = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  const handleClick = () => {
    setIsScrollable((prev) => !prev);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-3 overflow-hidden">
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

      <div className="grid grid-cols-12 gap-3 mt-4 shadow-card">
        <div className="col-span-12 md:col-span-5">
          <div className="titles flex justify-start p-2 mt-1">Services</div>

          <div className="flex justify-between items-center gap-2 shadow-card">
            <div className="flex-1">
              <div className="flex gap-2 items-center p-2">
                <span className="circle"></span>
                <span className="text-[#3371EB]">Total income</span>
              </div>
              <div>
                <p className="text-blue_maincolor font-bold text-[18px] px-4">
                  260k
                </p>
              </div>

              <div className="flex gap-2 items-center p-2">
                <span className="circle"></span>
                <span className="text-[#3371EB]">Income growth</span>
              </div>
              <div>
                <p className="text-blue_maincolor font-bold text-[18px] px-4 flex items-center text-nowrap ">
                  20% <CgArrowUp />{" "}
                  <span className="text-[#3371EB">In this month</span>
                </p>
              </div>
            </div>
            <div>
              <img src={img} />
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 shadow-card">
            <div className="flex-1">
              <div className="flex gap-2 items-center p-2">
                <span className="circle"></span>
                <span className="text-[#3371EB]">Total income</span>
              </div>
              <div>
                <p className="text-blue_maincolor font-bold text-[18px] px-4">
                  260k
                </p>
              </div>

              <div className="flex gap-2 items-center p-2">
                <span className="circle"></span>
                <span className="text-[#3371EB]">Income growth</span>
              </div>
              <div>
                <p className="text-blue_maincolor font-bold text-[18px] px-4 flex items-center text-nowrap ">
                  20% <CgArrowUp />{" "}
                  <span className="text-[#3371EB">In this month</span>
                </p>
              </div>
            </div>
            <div>
              <img src={img} />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div
            className={`min-w-[100%] ${
              isScrollable ? "overflow-x-auto" : ""
            } transition-all duration-300`}
            onClick={handleClick}
          >
            <div className="flex justify-end p-2 text-[#9C9C9C]">View All</div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData2}
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
                  <Bar dataKey="pv" fill="#0017C2" />
                  {/* تغيير لون العمود الثاني */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
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
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
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
                  <Bar dataKey="pv" fill="#0017C2" />
                  {/* تغيير لون العمود الثاني */}
                  <Bar dataKey="uv" fill="#3FBDF1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
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
