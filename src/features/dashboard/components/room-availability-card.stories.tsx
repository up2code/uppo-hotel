import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { RoomAvailabilityCard } from './room-availability-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Features/Dashboard/RoomAvailability',
  component: RoomAvailabilityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoomAvailabilityCard>;

export default meta;
type Story = StoryObj<typeof RoomAvailabilityCard>;

export const Default: Story = {
  args: {},
};
