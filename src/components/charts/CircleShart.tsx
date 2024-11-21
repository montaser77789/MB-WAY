import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Medical", value: 28, color: "#008FFB" },
  { name: "Engineering", value: 16.3, color: "#00E396" },
  { name: "Education", value: 5, color: "#FEB019" },
];

const MyDonutChart = () => (
  <div
    style={{ minWidth: "100%", height: 300, position: "relative", zIndex: 10 }}
  >
    <ResponsiveContainer width="100%" height="80%">
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          labelLine={false}
          isAnimationActive={true}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {pieData.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginRight: "50px" }}
        >
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: entry.color,
              marginRight: "8px",

              borderRadius: "50%",
            }}
          ></div>
          <span
            style={{
              fontSize: "14px",
              color: "#000",
              marginBottom: "7px",
              textWrap: "nowrap",
            }}
          >
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default MyDonutChart;
