import { useState } from "react";

import { createSantri } from "@/services/santriService";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function SantriForm({ reload }) {
  const [form, setForm] = useState({
    nis: "",
    nama: "",
    kelas: "",
    kamar: "",
    target: 500000,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await createSantri({
      ...form,
      saldo: 0,
      createdAt: new Date(),
    });

    reload();

    setForm({
      nis: "",
      nama: "",
      kelas: "",
      kamar: "",
      target: 500000,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-2">
      <Input
        placeholder="NIS"
        value={form.nis}
        onChange={(e) =>
          setForm({
            ...form,
            nis: e.target.value,
          })
        }
      />

      <Input
        placeholder="Nama"
        value={form.nama}
        onChange={(e) =>
          setForm({
            ...form,
            nama: e.target.value,
          })
        }
      />

      <Input
        placeholder="Kelas"
        value={form.kelas}
        onChange={(e) =>
          setForm({
            ...form,
            kelas: e.target.value,
          })
        }
      />

      <Input
        placeholder="Kamar"
        value={form.kamar}
        onChange={(e) =>
          setForm({
            ...form,
            kamar: e.target.value,
          })
        }
      />

      <Button type="submit">Tambah</Button>
    </form>
  );
}
