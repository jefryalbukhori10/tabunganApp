import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "@/firebase/config";

export async function tambahSetoran({ santriId, santriNama, nominal }) {
  await addDoc(collection(db, "transaksi"), {
    santriId,
    santriNama,
    nominal: Number(nominal),
    jenis: "setoran",
    tanggal: new Date(),
  });

  await updateDoc(doc(db, "santri", santriId), {
    saldo: increment(Number(nominal)),
  });
}

export async function getAllTransaksi() {
  const q = query(collection(db, "transaksi"), orderBy("tanggal", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
