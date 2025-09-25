import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { ChatbotSetupForm, ChatbotSetupFormProps } from "./chatbot-setup-form";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ChatbotSetupFormProps> = {
  title: "Admin/Chatbot/ChatbotSetupForm",
  component: ChatbotSetupForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof ChatbotSetupForm>;

export default meta;
type Story = StoryObj<typeof ChatbotSetupForm>;

export const Default: Story = {
  args: {
    mode: "create",
    loading: false,
  },
};
