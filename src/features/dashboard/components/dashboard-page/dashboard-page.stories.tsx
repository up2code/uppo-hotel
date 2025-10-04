import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DashboardPage } from "./dashboard-page";

const meta: Meta<typeof DashboardPage> = {
  title: "Features/Dashboard/DashboardPage",
  component: DashboardPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {
  args: {},
};
