import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormCheckbox } from "./form-checkbox";
import { FormProvider } from "../form-provider/form-provider";

interface Item {
  isChecked?: boolean;
}

const meta: Meta<typeof FormCheckbox> = {
  title: "Forms/FormCheckbox",
  component: FormCheckbox,
  tags: ["autodocs"],
  args: {
    label: "Name",
    name: "name",
  },
  render: (args) => {
    return (
      <FormProvider<Item>>
        <FormCheckbox {...args} />
      </FormProvider>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FormCheckbox>;

export const Unchecked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    name: "terms",
  },
};

export const Checked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    name: "terms",
    defaultValue: true,
  },
};
