import type { Meta, StoryObj } from "@storybook/nextjs";
import { SummaryCard, SummaryCardProps } from "./summary-card";
import { ShoppingCart } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<SummaryCardProps> = {
  title: "Admin/Dashboard/SummaryCard",
  component: SummaryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof SummaryCard>;

export const Default: Story = {
  args: {
    label: "Total Revenue",
    value: "$12,345",
    icon: <ShoppingCart />,
    trend: "up",
    trendValue: 5,
  },
};
