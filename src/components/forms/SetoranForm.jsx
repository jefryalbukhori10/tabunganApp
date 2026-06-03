import { useEffect, useState } from "react";

import { getAllSantri } from "@/services/santriService";

import { tambahSetoran } from "@/services/transaksiService";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function SetoranForm({ reload }) {
  const [santri, setSantri] = useState([]);

  const [selected, setSelected] = useState("");

  const [nominal, setNominal] = useState("");

  async function loadSantri() {
    const data = await getAllSantri();

    setSantri(data);
  }

  useEffect(() => {
    loadSantri();
  }, []);

  async function submit(e) {
    e.preventDefault();

    const siswa = santri.find((s) => s.id === selected);

    if (!siswa) return;

    await tambahSetoran({
      santriId: siswa.id,
      santriNama: siswa.nama,
      nominal,
    });

    setNominal("");

    reload();
  }

  return (
    <form onSubmit={submit} className="flex gap-2 mb-6">
      <select
        className="border rounded px-3"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Pilih Santri</option>

        {santri.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nama}
          </option>
        ))}
      </select>

      <Input
        type="number"
        placeholder="Nominal"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
      />

      <Button type="submit">Simpan</Button>
    </form>
  );
}
