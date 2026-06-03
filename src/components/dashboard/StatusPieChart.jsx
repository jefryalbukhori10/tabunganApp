import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function StatusPieChart({ lunas, belum }) {
  const data = [
    {
      name: "Lunas",
      value: lunas,
    },
    {
      name: "Belum",
      value: belum,
    },
  ];

  return (
    <div className="bg-white border rounded-xl p-4">
      <h2 className="font-bold mb-4">Status Santri</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
