import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";

import { getAllSantri, removeSantri } from "@/services/santriService";

import SantriForm from "@/components/forms/SantriForm";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Badge } from "lucide-react";
import { exportSantri } from "@/utils/exportExcel";

export default function Santri() {
  const [santri, setSantri] = useState([]);
  const [search, setSearch] = useState("");

  async function loadData() {
    const data = await getAllSantri();

    setSantri(data);
  }

  async function hapus(id) {
    if (!confirm("Yakin ingin menghapus?")) return;

    await removeSantri(id);

    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  const filtered = santri.filter((item) =>
    item.nama?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Data Santri</h1>
      <Input
        placeholder="Cari santri..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => exportSantri(santri)}>Export Excel</Button>
      <SantriForm reload={loadData} />

      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NIS</TableHead>

              <TableHead>Nama</TableHead>

              <TableHead>Kelas</TableHead>

              <TableHead>Kamar</TableHead>

              <TableHead>Saldo</TableHead>

              <TableHead>Progress</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nis}</TableCell>

                <TableCell>{item.nama}</TableCell>

                <TableCell>{item.kelas}</TableCell>

                <TableCell>{item.kamar}</TableCell>

                <TableCell>Rp {(item.saldo || 0).toLocaleString()}</TableCell>

                <TableCell>
                  <div className="w-full bg-slate-200 rounded h-3">
                    <div
                      className="bg-green-500 h-3 rounded"
                      style={{
                        width: `${Math.min(
                          ((item.saldo || 0) / item.target) * 100,
                          100,
                        )}%`,
                      }}
                    />
                  </div>
                </TableCell>

                <TableCell>
                  {item.saldo >= item.target ? (
                    <Badge>Lunas</Badge>
                  ) : (
                    <Badge variant="secondary">Belum</Badge>
                  )}
                </TableCell>

                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => hapus(item.id)}
                  >
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
}
