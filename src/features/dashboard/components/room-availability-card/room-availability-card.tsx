import { Dropdown } from "@/components/shared/dropdown";
import { Paper } from "@/components/shared/paper";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

const chartData = [
  { key: "occupied", value: 21, fill: "var(--chart-1)" },
  { key: "booked", value: 14, fill: "var(--chart-2)" },
  { key: "available", value: 8, fill: "var(--chart-3)" },
];

const chartConfig = {
  occupied: {
    label: "Occupied",
  },
  booked: {
    label: "Booked",
  },
  available: {
    label: "Available",
  },
} satisfies ChartConfig;

const MockLegend = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ul className="flex flex-col items-start gap-2 text-[10px]">
        <li className="flex items-center justify-center gap-2">
          <div className="bg-chart-1 size-4 rounded-full" />
          <span className="min-w-10">Occupied</span>
          <span className="min-w-2 text-center">21</span>
          <span>Rooms</span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <div className="bg-chart-2 size-4 rounded-full" />
          <span className="min-w-10">Booked</span>
          <span className="min-w-2 text-center">14</span>
          <span>Rooms</span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <div className="bg-chart-3 size-4 rounded-full" />
          <span className="min-w-10">Available</span>
          <span className="min-w-2 text-center">8</span>
          <span>Rooms</span>
        </li>
      </ul>
    </div>
  );
};

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <h2 className="text-md font-semibold">Room Availability</h2>
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

export const RoomAvailabilityCard = () => {
  return (
    <Paper className="flex flex-col gap-4 w-full">
      <Header className="flex items-center justify-between gap-4" />
      <div className="flex flex-row gap-4">
        <div className="realtive flex items-center justify-center flex-1">
          <ChartContainer
            config={chartConfig}
            className="aspect-square max-w-48 flex-1"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="key"
                innerRadius="60%"
                outerRadius="100%"
              />
            </PieChart>
          </ChartContainer>
        </div>
        <div className="flex items-end m-4">
          <MockLegend />
        </div>
      </div>
    </Paper>
  );
};
