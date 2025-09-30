import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as z from "zod";
import { FormImageInput } from "./form-image-input";
import { FormProvider } from "../form-provider/form-provider";
import { Button } from "@/components/shared/button";
import { zodResolver } from "@hookform/resolvers/zod";

interface Item {
  imageUrl: string;
}
const itemSchemaValidation = {
  imageUrl: z.string({ message: "Image URL is required" }),
};

const itemSchema = z.object(itemSchemaValidation);

const meta: Meta<typeof FormImageInput> = {
  title: "Forms/FormImageInput",
  component: FormImageInput,
  args: {
    label: "Image URL",
    name: "imageUrl",
  },
  render: (args) => {
    return (
      <FormProvider<Item> resolver={zodResolver(itemSchema)}>
        <FormImageInput {...args} />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </FormProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormImageInput>;

export const Valid: Story = {
  args: {
    defaultValue: "https://placehold.co/600",
  },
};
