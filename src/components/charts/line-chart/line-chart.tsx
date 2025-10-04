import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface LineChartProps {
  data: Record<string, string | number>[];
  xAxisDataKey: string;
  height?: number;
}

export const LineChart = ({ data, xAxisDataKey }: LineChartProps) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="2%" stopColor="#E86B39" stopOpacity={0.2} />
              <stop offset="98%" stopColor="#E86B39" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#E86B39"
            fillOpacity={1}
            fill="url(#colorArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
