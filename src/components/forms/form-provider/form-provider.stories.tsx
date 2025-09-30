import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/shared/button";
import { FormProvider } from "./form-provider";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../form-text-input";
import { FormSelect } from "../form-select";
import { Column } from "@/components/layouts/column";

interface Item {
  name: string;
  fruit: string;
}
const itemSchemaValidation = {
  name: z.string({ message: "Name is required" }),
  fruit: z.string({ message: "Fruit is required" }),
};

const itemSchema = z.object(itemSchemaValidation);

const meta: Meta<typeof FormProvider> = {
  title: "Forms/FormProvider",
  component: FormProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
  render: (args) => (
    <FormProvider<Item>
      defaultValues={args.defaultValues}
      onSubmit={args.onSubmit}
      disabled={args.disabled}
      resolver={zodResolver(itemSchema)}
    >
      <Column>
        <FormTextInput label="Name" name="name" />
        <FormSelect
          label="Fruit"
          name="fruit"
          placeholder="Select a fruit"
          options={[
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
            { value: "cherry", label: "Cherry" },
          ]}
        />
        <Button type="submit">Submit</Button>
      </Column>
    </FormProvider>
  ),
} satisfies Meta<typeof FormProvider>;

export default meta;
type Story = StoryObj<typeof FormProvider>;

export const ValidForm: Story = {
  args: {
    defaultValues: {
      name: "John Doe",
      fruit: "banana",
    },
  },
  play: async ({ canvas }) => {
    canvas.getByRole("button", { name: "Submit" }).click();
  },
};

export const InvalidForm: Story = {
  play: async ({ canvas }) => {
    canvas.getByRole("button", { name: "Submit" }).click();
  },
};

export const DisabledForm: Story = {
  args: {
    defaultValues: {
      name: "John Doe",
      fruit: "banana",
    },
    disabled: true,
  },
};
