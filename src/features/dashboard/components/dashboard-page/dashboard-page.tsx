import * as React from "react";
import { SummaryCard } from "../summary-card";
import { ShoppingCart } from "lucide-react";
import { RoomAvailabilityCard } from "../room-availability-card/room-availability-card";
import { BookingTrendsCard } from "../booking-trends-card";
import { RevenueTrendCard } from "../revenue-trend-card";
import { OccupancyCard } from "../occupancy-card";
import { CheckInOutAveragesCard } from "../check-in-out-averages-card";

export const DashboardPage = () => {
  return (
    <div className="md:p-6 lg:p-8 flex- flex-col gap-4 md:gap-6 lg:gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          label="Total booking"
          value="100"
          icon={<ShoppingCart />}
          trend="up"
          trendValue={10}
        />
        <SummaryCard
          label="Total booking"
          value="100"
          icon={<ShoppingCart />}
          trend="up"
          trendValue={10}
        />
        <SummaryCard
          label="Total booking"
          value="100"
          icon={<ShoppingCart />}
          trend="up"
          trendValue={10}
        />
        <SummaryCard
          label="Total booking"
          value="100"
          icon={<ShoppingCart />}
          trend="up"
          trendValue={10}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <RoomAvailabilityCard />
        <BookingTrendsCard />
      </div>

      <RevenueTrendCard />
      <OccupancyCard />
      <CheckInOutAveragesCard />
    </div>
  );
};
