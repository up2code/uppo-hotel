import type { Meta, StoryObj } from "@storybook/nextjs";
import { ImageInput, ImageInputProps } from "./image-input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ImageInputProps> = {
  title: "Components/Input/ImageInput",
  component: ImageInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const HaveValue: Story = {
  args: {
    value: "https://picsum.photos/200",
  },
};
