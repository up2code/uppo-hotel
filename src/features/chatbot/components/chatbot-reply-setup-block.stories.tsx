import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { nanoid } from 'nanoid';
import {
  ChatbotReplySetupBlock,
  ChatbotReplySetupBlockProps,
} from './chatbot-reply-setup-block';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ChatbotReplySetupBlockProps> = {
  title: 'Features/Chatbot/ChatbotReplySetupBlock',
  component: ChatbotReplySetupBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onDelete: fn(),
    onClickEdit: fn(),
    onSave: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof ChatbotReplySetupBlock>;

export default meta;
type Story = StoryObj<typeof ChatbotReplySetupBlock>;

export const Read: Story = {
  args: {
    readOnly: true,
    setup: {
      id: nanoid(),
    },
  },
};

export const Edit: Story = {
  args: {
    setup: {
      id: nanoid(),
    },
  },
};

export const ReplyWithRoomType: Story = {
  args: {
    setup: {
      id: nanoid(),
      replyFormat: 'room-type',
    },
  },
};

export const ReplyWithMessage: Story = {
  args: {
    setup: {
      id: nanoid(),
      replyFormat: 'message',
    },
  },
};

export const ReplyWithOptions: Story = {
  args: {
    setup: {
      id: nanoid(),
      replyFormat: 'options',
    },
  },
};

export const Disabled: Story = {
  args: {
    setup: {
      id: nanoid(),
    },
    readOnly: true,
    disabled: true,
  },
};
