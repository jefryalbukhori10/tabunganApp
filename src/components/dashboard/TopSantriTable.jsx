export default function TopSantriTable({ santri }) {
  const top = [...santri]
    .sort((a, b) => (b.saldo || 0) - (a.saldo || 0))
    .slice(0, 10);

  return (
    <div className="bg-white border rounded-xl p-4">
      <h2 className="font-bold mb-4">Top 10 Saldo</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Saldo</th>
          </tr>
        </thead>

        <tbody>
          {top.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>

              <td>Rp {(item.saldo || 0).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
