import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { UpdateRoomType } from "./update-room-type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof UpdateRoomType> = {
  title: "Features/Room Types/UpdateRoomTypeForm",
  component: UpdateRoomType,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    id: "room-type-123",
    onSuccess: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof UpdateRoomType>;

export default meta;
type Story = StoryObj<typeof UpdateRoomType>;

export const Default: Story = {};
