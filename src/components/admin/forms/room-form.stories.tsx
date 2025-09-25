import type { Meta, StoryObj } from "@storybook/nextjs";
import { RoomForm, RoomFormProps } from "./room-form";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<RoomFormProps> = {
  title: "Admin/Rooms/Room Form",
  component: RoomForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof RoomForm>;

export default meta;
type Story = StoryObj<typeof RoomForm>;

export const Create: Story = {
  args: {
    mode: "create",
    loading: false,
  },
};

export const CreateInProgress: Story = {
  args: {
    mode: "create",
    loading: true,
  },
};

export const Edit: Story = {
  args: {
    mode: "edit",
    loading: false,
  },
};

export const EditInProgress: Story = {
  args: {
    mode: "edit",
    loading: true,
  },
};
