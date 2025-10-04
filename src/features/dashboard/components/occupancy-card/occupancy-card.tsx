import { LineChart } from "@/components/charts/line-chart";
import { Column } from "@/components/layouts/column";
import { Button } from "@/components/shared/button";
import { Paper } from "@/components/shared/paper";
import { TextInput } from "@/components/shared/text-input";
import { Banknote, CreditCardIcon } from "lucide-react";
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
        <h2 className="text-md font-semibold">Occypancy & Guest</h2>
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

export const OccupancyCard = () => {
  return (
    <Paper>
      <Header />
      <div className="h-4" />
      <LineChart data={data} xAxisDataKey="name" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="flex-1 p-4">
          <h2 className="text-sm font-medium mb-4">Guest Visit</h2>
          <ProgressItem label="New guests" value={867} percentage={88} />
          <ProgressItem label="Returning guests" value={118} percentage={12} />
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-sm font-medium mb-4">Payment Method</h2>
          <ProgressItem
            icon={<CreditCardIcon className="size-4" />}
            label="Credit card"
            value={867}
            percentage={88}
          />
          <ProgressItem
            icon={<Banknote className="size-4" />}
            label="Cash"
            value={118}
            percentage={12}
          />
        </div>
      </div>
    </Paper>
  );
};

const ProgressItem = ({
  label,
  value,
  percentage,
  icon,
}: {
  label: string;
  value: number;
  percentage: number;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4">
      {icon && (
        <div className="flex justify-center items-center bg-gray-200 size-8 rounded-full">
          <span className="inline-block">{icon}</span>
        </div>
      )}
      <div className="flex-1">
        <p>
          {label} <span>{value} people</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-[#E86B39] h-3 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};
