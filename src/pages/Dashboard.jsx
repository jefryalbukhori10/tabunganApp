import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";

import StatsCards from "@/components/dashboard/StatsCards";
import MonthlyBarChart from "@/components/dashboard/MonthlyBarChart";
import ProgressCard from "@/components/dashboard/ProgressCard";
import StatusPieChart from "@/components/dashboard/StatusPieChart";
import TopSantriTable from "@/components/dashboard/TopSantriTable";

import { getDashboardData } from "@/services/dashboardService";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await getDashboardData();

    setDashboard(data);
  }

  if (!dashboard) return <Layout>Loading...</Layout>;

  const monthlyData = [
    {
      bulan: "Jan",
      total: 1200000,
    },
    {
      bulan: "Feb",
      total: 2500000,
    },
    {
      bulan: "Mar",
      total: 4000000,
    },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <StatsCards
        totalSantri={dashboard.santri.length}
        totalSaldo={dashboard.totalSaldo}
        lunas={dashboard.lunas}
        belum={dashboard.belum}
      />

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <MonthlyBarChart data={monthlyData} />

        <StatusPieChart lunas={dashboard.lunas} belum={dashboard.belum} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <ProgressCard
          totalSaldo={dashboard.totalSaldo}
          totalTarget={dashboard.totalTarget}
        />

        <TopSantriTable santri={dashboard.santri} />
      </div>
    </Layout>
  );
}
