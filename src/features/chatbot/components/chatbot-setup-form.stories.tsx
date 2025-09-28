import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChatbotSetupForm, ChatbotSetupFormProps } from "./chatbot-setup-form";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ChatbotSetupFormProps> = {
  title: "Features/Chatbot/ChatbotSetupForm",
  component: ChatbotSetupForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ChatbotSetupForm>;

export default meta;
type Story = StoryObj<typeof ChatbotSetupForm>;

export const Default: Story = {
  args: {},
};
