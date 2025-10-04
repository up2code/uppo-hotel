import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OccupancyCard } from "./occupancy-card";

const meta: Meta<typeof OccupancyCard> = {
  title: "Features/Dashboard/OccupancyCard",
  component: OccupancyCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OccupancyCard>;

export const Default: Story = {
  args: {},
};
