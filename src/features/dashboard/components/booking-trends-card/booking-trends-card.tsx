import { Dropdown } from "@/components/shared/dropdown";
import { Paper } from "@/components/shared/paper";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface BookingTrendsCardProps {
  // Define any props if needed
  name?: string;
}

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h2 className="text-md font-semibold">Booking Trends by Day</h2>
      <Dropdown
        options={[
          { label: "This Month", value: "this_month" },
          { label: "This Week", value: "this_week" },
          { label: "Today", value: "today" },
        ]}
        defaultValue="this_month"
      />
    </div>
  );
};

const data = [
  {
    name: "Mon",
    bookings: 36,
  },
  {
    name: "Tue",
    bookings: 50,
  },
  {
    name: "Wed",
    bookings: 30,
  },
  {
    name: "Thu",
    bookings: 57,
  },
  {
    name: "Fri",
    bookings: 71,
  },
  {
    name: "Sat",
    bookings: 100,
  },
  {
    name: "Sun",
    bookings: 78,
  },
];

export const BookingTrendsCard = ({}: BookingTrendsCardProps) => {
  return (
    <Paper>
      <Header className="flex justify-between items-center mb-6" />
      <div className="w-full h-[220px] md:max-h-[400px] -ml-4 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} maxBarSize={60} barCategoryGap={"60%"}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              axisLine={{ stroke: "#e0e0e0" }}
            />
            <YAxis
              tick={{ fontSize: 10 }}
              axisLine={{ stroke: "#e0e0e0" }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, "Occupancy Rate"]}
              labelFormatter={(label) => `${label}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <Bar
              dataKey="bookings"
              fill="#E76B38"
              radius={6}
              activeBar={
                <Rectangle fill="#E76B38" stroke="#1d4ed8" strokeWidth={2} />
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};
