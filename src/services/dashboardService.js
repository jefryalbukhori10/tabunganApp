import { collection, getDocs } from "firebase/firestore";

import { db } from "@/firebase/config";

const TARGET_PER_SANTRI = 500000;

export async function getDashboardData() {
  const santriSnapshot = await getDocs(collection(db, "santri"));

  const transaksiSnapshot = await getDocs(collection(db, "transaksi"));

  const santri = santriSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const transaksi = transaksiSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const totalSaldo = santri.reduce((a, b) => a + (b.saldo || 0), 0);

  const lunas = santri.filter((item) => item.saldo >= TARGET_PER_SANTRI).length;

  const belum = santri.length - lunas;

  const totalTarget = santri.length * TARGET_PER_SANTRI;

  return {
    santri,
    transaksi,
    totalSaldo,
    lunas,
    belum,
    totalTarget,
  };
}
