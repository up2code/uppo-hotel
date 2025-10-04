import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HotelEditPage } from "./hotel-edit-page";
import { http, HttpResponse } from "msw";
import { paths } from "@/config/paths";
import { mockHotel } from "../../__test__/mock-hotel";

const meta: Meta<typeof HotelEditPage> = {
  title: "Features/Hotel/HotelEditPage",
  component: HotelEditPage,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get(paths.api.hotel(), () => {
          return HttpResponse.json(mockHotel);
        }),
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HotelEditPage>;

export const Default: Story = {
  args: {},
};
