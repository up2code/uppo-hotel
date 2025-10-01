import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RoomTypesTable } from "./room-types-table";

const meta: Meta<typeof RoomTypesTable> = {
  title: "Features/Room Types/RoomTypesTable",
  component: RoomTypesTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RoomTypesTable>;

export const Default: Story = {
  args: {},
};
