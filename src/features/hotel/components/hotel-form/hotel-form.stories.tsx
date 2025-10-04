import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { HotelForm } from "./hotel-form";

const meta: Meta<typeof HotelForm> = {
  title: "Features/Hotel/HotelForm",
  component: HotelForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onSubmit: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof HotelForm>;

export default meta;

type Story = StoryObj<typeof HotelForm>;

export const Default: Story = {
  args: {
    defaultValues: {
      name: "Hotel California",
      description: "A lovely hotel",
      logoUrl: "https://picsum.photos/200",
    },
    loading: false,
  },
};
