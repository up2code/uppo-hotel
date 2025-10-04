import { Paper } from "@/components/shared/paper";
import { Hotel } from "lucide-react";
import * as React from "react";

export const CheckInOutAveragesCard = () => {
  return (
    <Paper>
      <div className="">
        <h2 className="text-md font-semibold mb-4">
          Check-in & Check-out Averages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardItem
            backgroundColor="#F1F5F3"
            icon={<Hotel className="size-6" />}
            title="Check-ins"
            description="Check-in time from 2:00 PM onwards"
            time="4:03 PM"
          />
          <CardItem
            backgroundColor="#FAEDE8"
            icon={<Hotel className="size-4" />}
            title="Check-outs"
            description="Check-out time until 11:00 AM"
            time="10:45 AM"
          />
        </div>
      </div>
    </Paper>
  );
};

const CardItem = ({
  backgroundColor,
  icon,
  title,
  description,
  time,
}: {
  backgroundColor?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  time?: string;
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className="flex gap-4 items-center px-2 py-4 rounded"
    >
      <div className="bg-black/5 p-4 rounded-full">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1 font-bold text-sm  md:text-lg">
          <h3>{title}</h3>
          <p>{time}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
