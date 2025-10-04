import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BookingList } from "./booking-list";
import { http, HttpResponse } from "msw";
import { paths } from "@/config/paths";
import { mockBookingData } from "../../__test__/mock-booking-data";

const meta: Meta<typeof BookingList> = {
  title: "Features/Bookings/BookingList",
  component: BookingList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get(paths.api.bookings.list(), () => {
          return HttpResponse.json(mockBookingData);
        }),
      ],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof BookingList>;

export const Default: Story = {
  args: {},
};
