import type { Meta, StoryObj } from "@storybook/nextjs";
import { CreateRoomTypePage } from "./create-room-type-page";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pages/room-types/create",
  component: CreateRoomTypePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreateRoomTypePage>;

export default meta;
type Story = StoryObj<typeof CreateRoomTypePage>;

export const Default: Story = {};
