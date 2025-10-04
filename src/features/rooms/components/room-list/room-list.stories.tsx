import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RoomList } from "./room-list";
import { paths } from "@/config/paths";
import { http, HttpResponse } from "msw";
import { mockRoomList } from "../../__test__/mock-room-data";

const meta: Meta<typeof RoomList> = {
  title: "Features/Rooms/RoomList",
  component: RoomList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get(paths.api.rooms.list(), () => {
          return HttpResponse.json(mockRoomList);
        }),
      ],
    },
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

type Story = StoryObj<typeof RoomList>;

export const Default: Story = {
  args: {},
};
