export default function ProgressCard({ totalSaldo, totalTarget }) {
  const progress =
    totalTarget > 0 ? ((totalSaldo / totalTarget) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white border rounded-xl p-4">
      <h2 className="font-bold">Progress Dana</h2>

      <p className="mt-2">
        Rp {totalSaldo.toLocaleString()}
        {" / "}
        Rp {totalTarget.toLocaleString()}
      </p>

      <div className="h-4 bg-slate-200 rounded mt-4">
        <div
          className="h-4 rounded bg-green-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2">{progress}%</p>
    </div>
  );
}
