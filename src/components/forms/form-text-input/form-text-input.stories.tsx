import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormTextInput } from "./form-text-input";
import { FormProvider } from "../form-provider/form-provider";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/shared/button";
import { fn } from "storybook/test";

interface Item {
  name: string;
}
const itemSchemaValidation = {
  name: z.string({ message: "Name is required" }),
};

const itemSchema = z.object(itemSchemaValidation);

const meta: Meta<typeof FormTextInput> = {
  title: "Forms/FormTextInput",
  component: FormTextInput,
  args: {
    label: "Name",
    name: "name",
  },
  render: (args) => (
    <FormProvider<Item> onSubmit={fn()} resolver={zodResolver(itemSchema)}>
      <FormTextInput {...args} />
      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </FormProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof FormTextInput>;

export const Valid: Story = {
  play: async ({ canvas, userEvent }) => {
    const nameInput = await canvas.findByLabelText("Name");
    await userEvent.type(nameInput, "Deluxe Room");

    const submitButton = await canvas.findByRole("button");
    await userEvent.click(submitButton);
  },
};

export const Invalid: Story = {
  play: async ({ canvas }) => {
    canvas.getByRole("button", { name: "Submit" }).click();
  },
};
