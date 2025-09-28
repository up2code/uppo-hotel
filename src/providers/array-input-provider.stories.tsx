import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrayInputProvider, useArrayInput } from './array-input-provider';

interface Item {
  id: number;
  name: string;
}

const SampleComponent = () => {
  const { items, add, remove } = useArrayInput<Item>();

  return (
    <div className="p-4 border rounded flex flex-col gap-4">
      <h2>Items</h2>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={item.id} className="flex justify-between gap-4">
            <input
              type="text"
              name={`items.${index}.name`}
              defaultValue={item.name}
              className="flex-grow border p-2 rounded"
            />
            <button
              className="text-red-500"
              onClick={() => remove && remove(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() =>
          add({ id: items.length + 1, name: `Item ${items.length + 1}` })
        }
      >
        Add Item
      </button>
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArrayInputProvider> = {
  title: 'Providers/ArrayInputProvider',
  component: ArrayInputProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArrayInputProvider>;

export default meta;
type Story = StoryObj<typeof ArrayInputProvider>;

export const Default: Story = {
  args: {
    values: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
    children: <SampleComponent />,
  },
};
