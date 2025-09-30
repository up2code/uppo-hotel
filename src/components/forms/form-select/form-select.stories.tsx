import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormSelect } from "./form-select";
import { FormProvider } from "../form-provider/form-provider";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/shared/button";

interface Item {
  fruit: string;
}
const itemSchemaValidation = {
  fruit: z.string({ message: "Fruit is required" }),
};

const itemSchema = z.object(itemSchemaValidation);

const meta: Meta<typeof FormSelect> = {
  title: "Forms/FormSelect",
  component: FormSelect,
  args: {
    label: "ผลไม้",
    name: "fruit",
    placeholder: "เลือกผลไม้",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },
  render: (args) => {
    return (
      <FormProvider<Item> resolver={zodResolver(itemSchema)}>
        <FormSelect {...args} />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </FormProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormSelect>;

export const Valid: Story = {
  args: {
    defaultValue: "banana",
  },
};

export const Invalid: Story = {
  play: async ({ canvas }) => {
    canvas.getByRole("button").click();
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "banana",
    disabled: true,
  },
};
