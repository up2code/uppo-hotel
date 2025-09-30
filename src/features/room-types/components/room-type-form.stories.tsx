import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RoomTypeForm, RoomTypeFormProps } from "./room-type-form";
import { expect, fn } from "storybook/test";
import { DEFAULT_ROOM_TYPE_FORM_DATA } from "../types/room-type";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<RoomTypeFormProps> = {
  title: "Features/Room Types/RoomTypeForm",
  component: RoomTypeForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
    onChange: fn(),
    defaultValues: DEFAULT_ROOM_TYPE_FORM_DATA,
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

export const PlayValidForm: Story = {
  args: {
    mode: "create",
    loading: false,
    defaultValues: {
      name: "Deluxe Room",
      roomSize: 30,
      bedType: "king",
      guests: "4",
    },
  },
  play: async ({ args, canvas, userEvent }) => {
    const submitButton = await canvas.findByRole("button", { name: /create/i });

    await userEvent.click(submitButton);

    await expect(args.onSubmit).toHaveBeenCalled();
  },
};

export const InvalidForm: Story = {
  args: {
    mode: "create",
    loading: false,
  },
  play: async ({ canvas, userEvent }) => {
    const submitButton = canvas.getByRole("button", { name: /create/i });

    await userEvent.click(submitButton);

    const nameInputError = await canvas.findByTestId("name-error");
    const roomSizeInputError = await canvas.findByTestId("roomSize-error");

    await expect(nameInputError).toHaveTextContent("Required");
    await expect(roomSizeInputError).toHaveTextContent("Required");
  },
};
