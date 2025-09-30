import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CreateRoomType } from "./create-room-type";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CreateRoomType> = {
  title: "Features/Room Types/CreateRoomTypeForm",
  component: CreateRoomType,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSuccess: fn(),
  },
} satisfies Meta<typeof CreateRoomType>;

export default meta;
type Story = StoryObj<typeof CreateRoomType>;

export const Default: Story = {};
