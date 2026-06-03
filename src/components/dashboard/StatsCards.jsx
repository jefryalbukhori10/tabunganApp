import { Card } from "@/components/ui/card";

export default function StatsCards({ totalSantri, totalSaldo, lunas, belum }) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <Card className="p-4">
        <h3>Total Santri</h3>
        <p className="text-3xl font-bold">{totalSantri}</p>
      </Card>

      <Card className="p-4">
        <h3>Total Saldo</h3>
        <p className="text-3xl font-bold">Rp {totalSaldo.toLocaleString()}</p>
      </Card>

      <Card className="p-4">
        <h3>Lunas</h3>
        <p className="text-3xl font-bold">{lunas}</p>
      </Card>

      <Card className="p-4">
        <h3>Belum Lunas</h3>
        <p className="text-3xl font-bold">{belum}</p>
      </Card>
    </div>
  );
}
