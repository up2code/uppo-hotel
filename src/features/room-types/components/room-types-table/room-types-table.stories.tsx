import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RoomTypesTable } from "./room-types-table";
import { mockRoomTypes } from "./__test__/sample-data";

const meta: Meta<typeof RoomTypesTable> = {
  title: "Features/Room Types/RoomTypesTable",
  component: RoomTypesTable,
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

type Story = StoryObj<typeof RoomTypesTable>;

export const Default: Story = {
  args: {
    items: mockRoomTypes,
  },
};
