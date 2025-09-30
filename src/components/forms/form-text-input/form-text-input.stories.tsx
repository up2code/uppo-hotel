import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormTextInput } from "./form-text-input";
import { FormProvider } from "../form-provider/form-provider";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/shared/button";

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
  render: (args) => {
    return (
      <FormProvider<Item> resolver={zodResolver(itemSchema)}>
        <FormTextInput {...args} />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </FormProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormTextInput>;

export const Valid: Story = {
  args: {
    defaultValue: "Demo",
  },
  play: async ({ canvas, userEvent }) => {
    const submitButton = await canvas.findByRole("button");
    await userEvent.click(submitButton);
  },
};

export const Invalid: Story = {
  play: async ({ canvas }) => {
    canvas.getByRole("button", { name: "Submit" }).click();
  },
};
