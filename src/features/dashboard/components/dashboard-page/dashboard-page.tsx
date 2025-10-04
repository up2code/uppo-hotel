import { Column } from "@/components/layouts/column";
import * as React from "react";
import { SummaryCard } from "../summary-card";
import { ShoppingCart } from "lucide-react";
import { RoomAvailabilityCard } from "../room-availability-card/room-availability-card";
import { BookingTrendsCard } from "../booking-trends-card";

export const DashboardPage = () => {
  return (
    <Column>
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
    </Column>
  );
};
