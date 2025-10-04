import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LineChart } from "./line-chart";

const meta: Meta<typeof LineChart> = {
  title: "Charts/LineChart",
  component: LineChart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full h-96 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const data = [
  {
    name: "January",
    value: 38321,
  },
  {
    name: "Febuary",
    value: 18000,
  },
  {
    name: "March",
    value: 53210,
  },
  {
    name: "April",
    value: 65123,
  },
  {
    name: "May",
    value: 38181,
  },
  {
    name: "June",
    value: 56524,
  },
];

export const Default: Story = {
  args: {
    data: data,
    xAxisDataKey: "name",
    height: 300,
  },
};
