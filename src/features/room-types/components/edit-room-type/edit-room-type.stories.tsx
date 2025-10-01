import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { EditRoomType } from "./edit-room-type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof EditRoomType> = {
  title: "Features/Room Types/EditRoomTypeForm",
  component: EditRoomType,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    id: "room-type-123",
    onSuccess: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof EditRoomType>;

export default meta;
type Story = StoryObj<typeof EditRoomType>;

export const Default: Story = {};
