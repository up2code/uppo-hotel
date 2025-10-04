import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BookingTable } from "./booking-table";
import { mockBookingData } from "../../__test__/mock-booking-data";

const meta: Meta<typeof BookingTable> = {
  title: "Features/Bookings/BookingTable",
  component: BookingTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BookingTable>;

export const Default: Story = {
  args: {
    items: mockBookingData,
  },
};
