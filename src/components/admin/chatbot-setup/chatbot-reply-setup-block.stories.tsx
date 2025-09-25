import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import {
  ChatbotReplySetupBlock,
  ChatbotReplySetupBlockProps,
} from "./chatbot-reply-setup-block";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ChatbotReplySetupBlockProps> = {
  title: "Admin/Chatbot/ChatbotReplySetupBlock",
  component: ChatbotReplySetupBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof ChatbotReplySetupBlock>;

export default meta;
type Story = StoryObj<typeof ChatbotReplySetupBlock>;

export const Default: Story = {
  args: {},
};
