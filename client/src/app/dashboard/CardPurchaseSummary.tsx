import React from "react";
import { useGetDashboardMetricsQuery } from "@/state/api";

const CardPurchaseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500 ">
      CardPurchaseSummary
    </div>
  );
};

export default CardPurchaseSummary;
