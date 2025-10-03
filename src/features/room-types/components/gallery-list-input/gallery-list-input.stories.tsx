import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GalleryListInput } from "./gallery-list-input";
import { RoomTypeFormData } from "../../types/room-type";
import { FormProvider } from "@/components/forms/form-provider/form-provider";

const mockRoomType: RoomTypeFormData = {
  name: "Deluxe Room",
  roomSize: 35,
  bedType: "queen",
  guests: 2,
  pricePerNight: 120,
  promotionPrice: 100,
  hasPromoPrice: true,
  mainImageUrl: "https://picsum.photos/200",
  amenities: [
    { id: "1", value: "Free Wi-Fi" },
    { id: "2", value: "Air Conditioning" },
    { id: "3", value: "Flat-screen TV" },
  ],
  imageUrls: [
    { id: "1", value: "https://picsum.photos/200?1" },
    { id: "2", value: "https://picsum.photos/200?2" },
    { id: "3", value: "https://picsum.photos/200?3" },
  ],
};

const meta: Meta<typeof GalleryListInput> = {
  title: "Features/Room Types/GalleryList",
  component: GalleryListInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <FormProvider<RoomTypeFormData> defaultValues={mockRoomType}>
        <Story />
      </FormProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GalleryListInput>;

export const Default: Story = {
  args: {},
};
