import type { Meta, StoryObj } from "@storybook/nextjs";
import { Template, TemplateProps } from "./template";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TemplateProps> = {
  title: "Playground/Template",
  component: Template,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof Template>;

export const Default: Story = {
  args: {},
};
