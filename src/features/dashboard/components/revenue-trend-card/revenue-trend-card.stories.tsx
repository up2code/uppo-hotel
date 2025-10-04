import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RevenueTrendCard } from "./revenue-trend-card";

const meta: Meta<typeof RevenueTrendCard> = {
  title: "Features/Dashboard/RevenueTrendCard",
  component: RevenueTrendCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RevenueTrendCard>;

export const Default: Story = {
  args: {},
};
