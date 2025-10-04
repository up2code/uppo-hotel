import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CheckInOutAveragesCard } from "./check-in-out-averages-card";

const meta: Meta<typeof CheckInOutAveragesCard> = {
  title: "Features/Dashboard/CheckInOutAveragesCard",
  component: CheckInOutAveragesCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckInOutAveragesCard>;

export const Default: Story = {
  args: {},
};
