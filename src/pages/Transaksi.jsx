import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";

import SetoranForm from "@/components/forms/SetoranForm";

import { getAllTransaksi } from "@/services/transaksiService";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Transaksi() {
  const [data, setData] = useState([]);

  async function loadData() {
    const transaksi = await getAllTransaksi();

    setData(transaksi);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Setoran Tabungan</h1>

      <SetoranForm reload={loadData} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama</TableHead>

            <TableHead>Nominal</TableHead>

            <TableHead>Tanggal</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.santriNama}</TableCell>

              <TableCell>Rp {Number(item.nominal).toLocaleString()}</TableCell>

              <TableCell>
                {item.tanggal?.toDate
                  ? item.tanggal.toDate().toLocaleDateString("id-ID")
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
}
