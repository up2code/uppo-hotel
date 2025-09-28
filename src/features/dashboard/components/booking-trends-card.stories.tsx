import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  BookingTrendsCard,
  BookingTrendsCardProps,
} from './booking-trends-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<BookingTrendsCardProps> = {
  title: 'Features/Dashboard/BookingTrends',
  component: BookingTrendsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BookingTrendsCard>;

export default meta;
type Story = StoryObj<typeof BookingTrendsCard>;

export const Default: Story = {
  args: {},
};
