import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Layouts/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    pathname: "/admin/bookings",
  },
};
