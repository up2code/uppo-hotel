import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RoomTypeForm, RoomTypeFormProps } from "./room-type-form";
import { expect, fn } from "storybook/test";

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
    defaultValues: { name: "" },
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
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step("Fill in the form", async () => {
      const nameInput = (await canvas.findByLabelText(
        "Room Type"
      )) as HTMLInputElement;

      await userEvent.type(nameInput, "Deluxe Room");
    });

    await step("Click submit", async () => {
      const submitButton = await canvas.findByRole("button");
      await userEvent.click(submitButton);
    });

    await step("Verify onSubmit called", async () => {
      await expect(args.onSubmit).toHaveBeenCalled();
    });
  },
};

export const InvalidForm: Story = {
  args: {
    mode: "create",
    loading: false,
  },
  play: async ({ canvas, userEvent, step }) => {
    await step("Click submit", async () => {
      const submitButton = canvas.getByRole("button");
      await userEvent.click(submitButton);
    });

    await step("Verify error messages", async () => {
      const nameInputError = await canvas.findByTestId("name-error");

      await expect(nameInputError).toHaveTextContent("Required");
    });
  },
};
