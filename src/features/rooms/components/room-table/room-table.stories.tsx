import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RoomTable } from "./room-table";
import { mockRoomList } from "../../__test__/mock-room-data";

const meta: Meta<typeof RoomTable> = {
  title: "Features/Rooms/RoomTable",
  component: RoomTable,
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

type Story = StoryObj<typeof RoomTable>;

export const Default: Story = {
  args: {
    items: mockRoomList,
  },
};
