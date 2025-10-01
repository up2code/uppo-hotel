import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ListRoomTypes } from "./list-room-types";

const meta: Meta<typeof ListRoomTypes> = {
  title: "Features/Room Types/ListRoomTypes",
  component: ListRoomTypes,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ListRoomTypes>;

export const Default: Story = {
  args: {},
};
