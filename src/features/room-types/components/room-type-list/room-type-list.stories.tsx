import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RoomTypeList } from "./room-type-list";

const meta: Meta<typeof RoomTypeList> = {
  title: "Features/Room Types/ListRoomTypes",
  component: RoomTypeList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RoomTypeList>;

export const Default: Story = {
  args: {},
};
