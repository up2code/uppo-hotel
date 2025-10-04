import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BookingList } from "./booking-list";

const meta: Meta<typeof BookingList> = {
  title: "Features/Bookings/BookingList",
  component: BookingList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof BookingList>;

export const Default: Story = {
  args: {},
};
