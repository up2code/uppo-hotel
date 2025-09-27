import type { Meta, StoryObj } from "@storybook/nextjs";
import { ImageInput, ImageInputProps } from "./image-input";
import { http, HttpResponse, delay } from "msw";
import { file, nanoid } from "zod";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ImageInputProps> = {
  title: "Shared Components/ImageInput",
  component: ImageInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.post("/api/images", () => {
          return HttpResponse.json({
            success: true,
            message: "Image uploaded successfully",
            filename: `image-${Date.now()}`,
            url: `https://picsum.photos/200?${Date.now()}`,
          });
        }),
      ],
    },
  },
};

export const HaveValue: Story = {
  args: {
    value: "https://picsum.photos/200",
  },
};
