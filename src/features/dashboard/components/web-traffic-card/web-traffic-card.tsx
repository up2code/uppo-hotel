import { LineChart } from "@/components/charts/line-chart";
import { Column } from "@/components/layouts/column";
import { Dropdown } from "@/components/shared/dropdown";
import { Paper } from "@/components/shared/paper";
import * as React from "react";

const data = [
  {
    name: "January",
    value: 38321,
  },
  {
    name: "Febuary",
    value: 18000,
  },
  {
    name: "March",
    value: 53210,
  },
  {
    name: "April",
    value: 65123,
  },
  {
    name: "May",
    value: 38181,
  },
  {
    name: "June",
    value: 56524,
  },
];

const Header = () => {
  return (
    <Column>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-md font-semibold">Website traffic</h2>
        <Dropdown
          options={[
            { label: "This Month", value: "this_month" },
            { label: "This Week", value: "this_week" },
            { label: "Today", value: "today" },
          ]}
          defaultValue="this_month"
        />
      </div>
    </Column>
  );
};

export const WebTrafficCard = () => {
  return (
    <Paper>
      <Header />
      <div className="h-4" />
      <LineChart data={data} xAxisDataKey="name" />
    </Paper>
  );
};
