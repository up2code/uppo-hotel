import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DataTable } from "./data-table";

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    items: [
      { name: "Standard Room", pricePerNight: 100 },
      { name: "Deluxe Room", pricePerNight: 150 },
      { name: "Suite", pricePerNight: 250 },
    ],
    columns: [
      { accessorKey: "name", header: "Name" },
      {
        accessorKey: "pricePerNight",
        header: "Price",
        cell: (info) => `$${info.getValue()}`,
      },
    ],
  },
};
