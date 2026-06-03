import { signOut } from "firebase/auth";

import { auth } from "@/firebase/config";

import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="border-b p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">SiTabarokah</h1>
      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/santri">Santri</Link>
        <Link to="/transaksi">Transaksi</Link>
      </div>
      <Button variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
