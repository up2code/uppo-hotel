import type { StoryObj } from "@storybook/nextjs";
import { ChatbotReplySetupList } from "./chatbot-reply-setup-list";
import { ArrayInputProvider } from "@/providers/array-input-provider";
import { nanoid } from "nanoid";

const meta = {
  title: "Admin/Chatbot/ChatbotReplySetupList",
  component: ChatbotReplySetupList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setups: [] as ChatbotReplySetup[],
  },
};

export default meta;
type Story = StoryObj<typeof ChatbotReplySetupList>;

export const Default: Story = {
  render: () => {
    const allTypes: ChatbotReplySetup[] = [
      {
        id: nanoid(),
      },
    ];

    return (
      <ArrayInputProvider values={allTypes}>
        <ChatbotReplySetupList />
      </ArrayInputProvider>
    );
  },
};

export const AllFormat: Story = {
  render: () => {
    const allTypes: ChatbotReplySetup[] = [
      {
        id: "1",
      },
      {
        id: "2",
        topic: "Check-in",
        replyFormat: "room-type",
        replyTitle: "Choose room",
        roomType: "Deluxe Room",
        buttonNameType: "Deluxe",
      },
      {
        id: "3",
        topic: "Contact",
        replyFormat: "message",
        replyMessage: "You can reach us at",
      },
      {
        id: "4",
        topic: "Book a room",
        replyFormat: "options",
        replyTitle: "Select an option",
        options: [
          { name: "Single Room", detail: "A cozy room for one" },
          { name: "Double Room", detail: "Perfect for couples" },
          { name: "Suite", detail: "Luxury and comfort" },
        ],
      },
    ];

    return (
      <ArrayInputProvider values={allTypes}>
        <ChatbotReplySetupList />
      </ArrayInputProvider>
    );
  },
};
