import type { Meta, StoryObj } from "@storybook/nextjs";
import { RoomTypeForm, RoomTypeFormProps } from "./room-type-form";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<RoomTypeFormProps> = {
  title: "Admin/Room Types/RoomTypeForm",
  component: RoomTypeForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof RoomTypeForm>;

export default meta;
type Story = StoryObj<typeof RoomTypeForm>;

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
