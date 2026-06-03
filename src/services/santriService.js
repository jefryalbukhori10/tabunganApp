import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/firebase/config";

const santriCollection = collection(db, "santri");

export async function getAllSantri() {
  const snapshot = await getDocs(santriCollection);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function createSantri(data) {
  return addDoc(santriCollection, data);
}

export async function removeSantri(id) {
  return deleteDoc(doc(db, "santri", id));
}

export async function updateSantri(id, data) {
  return updateDoc(doc(db, "santri", id), data);
}
