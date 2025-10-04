import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WebTrafficCard } from "./web-traffic-card";

const meta: Meta<typeof WebTrafficCard> = {
  title: "Features/Dashboard/WebTrafficCard",
  component: WebTrafficCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WebTrafficCard>;

export const Default: Story = {
  args: {},
};
