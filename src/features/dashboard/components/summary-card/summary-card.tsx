import React from "react";

export interface SummaryCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: number;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  label,
  value,
  trend,
  trendValue,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:p-5 lg:p-6 bg-white flex flex-col gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-shadow w-full">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm sm:text-base text-gray-700">
          {label}
        </span>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {value}
      </div>
      {trend && trendValue !== undefined && (
        <div
          className={`${
            trend === "up" ? "text-green-600" : "text-red-600"
          } flex items-center gap-1 text-xs sm:text-sm`}
        >
          <span className="text-xs">{trend === "up" ? "▲" : "▼"}</span>
          <span>
            {trend === "up" ? "Up" : "Down"} {trendValue}% from last month
          </span>
        </div>
      )}
    </div>
  );
};
