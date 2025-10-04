import { LineChart } from "@/components/charts/line-chart";
import { Column } from "@/components/layouts/column";
import { Row } from "@/components/layouts/row";
import { Button } from "@/components/shared/button";
import { Paper } from "@/components/shared/paper";
import { TextInput } from "@/components/shared/text-input";
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
        <h2 className="text-md font-semibold">Booking Trends by Day</h2>
        <div className="flex gap-4 items-center justify-center">
          <div className="gap-2 items-center hidden md:flex">
            <span>From</span>
            <TextInput type="date" />
            <span>To</span>
            <TextInput type="date" />
          </div>

          <Button className="btn-primary min-w-32">Export</Button>
        </div>
      </div>
      <div className="flex gap-2 w-full md:hidden">
        <div className="flex-1">
          <TextInput label="From" className="flex-1 border-2 border-gray-500" />
        </div>
        <div className="flex-1">
          <TextInput label="To" className="flex-1 border-2 border-gray-500" />
        </div>
      </div>
    </Column>
  );
};

export const RevenueTrendCard = () => {
  return (
    <Paper>
      <Header />
      <div className="h-4" />
      <LineChart data={data} xAxisDataKey="name" />
    </Paper>
  );
};
