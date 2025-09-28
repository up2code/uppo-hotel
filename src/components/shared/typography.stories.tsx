import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography, TypographyProps } from './typography';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<TypographyProps> = {
  title: 'Shared Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Headline1: Story = {
  args: {
    variant: 'h1',
    children: 'Headline 1',
  },
};

export const Headline2: Story = {
  args: {
    variant: 'h2',
    children: 'Headline 2',
  },
};

export const Headline3: Story = {
  args: {
    variant: 'h3',
    children: 'Headline 3',
  },
};

export const Headline4: Story = {
  args: {
    variant: 'h4',
    children: 'Headline 4',
  },
};

export const Headline5: Story = {
  args: {
    variant: 'h5',
    children: 'Headline 5',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children:
      'Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children:
      'Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Body3: Story = {
  args: {
    variant: 'body3',
    children:
      'Body 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
