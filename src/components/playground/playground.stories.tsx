import type { Meta, StoryObj } from "@storybook/nextjs";
import { Playground, PlaygroundProps } from "./playground";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<PlaygroundProps> = {
  title: "Playground/Playground",
  component: Playground,
  tags: ["autodocs"],
} satisfies Meta<typeof Playground>;

export default meta;
type Story = StoryObj<typeof Playground>;

export const Default: Story = {
  args: {},
};
