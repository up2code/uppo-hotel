import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextInput, TextInputProps } from './text-input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TextInputProps> = {
  title: 'Shared Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    label: 'Normal',
    placeholder: 'Place Holder',
  },
};

export const Focus: Story = {
  args: {
    label: 'Focus',
    placeholder: 'Place Holder',
    autoFocus: true,
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    value: 'Place Holder',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    placeholder: 'Place Holder',
    error: 'supporting text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Place Holder',
    disabled: true,
  },
};
