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
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 20,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minWidth: 200,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontWeight: 600, fontSize: 16 }}>{label}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
      {trend && trendValue !== undefined && (
        <div
          style={{
            color: trend === "up" ? "#16a34a" : "#dc2626",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 14,
          }}
        >
          <span>{trend === "up" ? "▲" : "▼"}</span>
          <span>
            {trend === "up" ? "Up" : "Down"} {trendValue}% from last month
          </span>
        </div>
      )}
    </div>
  );
};
