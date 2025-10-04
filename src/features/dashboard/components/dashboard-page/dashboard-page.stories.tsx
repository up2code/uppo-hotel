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
      <div className="p-4 bg-[#f5f5f5] min-h-screen">
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
