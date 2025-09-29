import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SummaryCard, SummaryCardProps } from "./summary-card";
import { ShoppingCart } from "lucide-react";
import { Row } from "@/components/layouts/row";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<SummaryCardProps> = {
  title: "Features/Dashboard/SummaryCard",
  component: SummaryCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Row className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
        <div className="max-w-7xl w-full mx-auto">
          <Story />
        </div>
      </Row>
    ),
  ],
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof SummaryCard>;

export const Up: Story = {
  args: {
    label: "Total Revenue",
    value: "$12,345",
    icon: <ShoppingCart />,
    trend: "up",
    trendValue: 5,
  },
};

export const Down: Story = {
  args: {
    label: "Total Revenue",
    value: "$12,345",
    icon: <ShoppingCart />,
    trend: "down",
    trendValue: 5,
  },
};

export const Multiple: Story = {
  args: {
    label: "Total Revenue",
    value: "$12,345",
    icon: <ShoppingCart />,
    trend: "down",
    trendValue: 5,
  },
  render: (args) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard {...args} />
      <SummaryCard {...args} trend="up" />
      <SummaryCard {...args} trend="down" />
      <SummaryCard {...args} trend="up" />
    </div>
  ),
};
