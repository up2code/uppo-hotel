import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider } from "@/components/forms/form-provider/form-provider";
import { FormTextInput } from "@/components/forms/form-text-input";
import { Column } from "@/components/layouts/column";
import { Paper } from "@/components/shared/paper";
import { AdminHeader } from "@/components/layouts/admin-header";
import { Button } from "@/components/shared/button";
import { Row } from "@/components/layouts/row";
import { FormSelect } from "@/components/forms/form-select";
import { RoomTypeFormData } from "../../types/room-type";
import { LoaderCircle } from "lucide-react";
import { Divider } from "@/components/shared/divider";
import { PromotionPriceInput } from "../promotion-price-input/promotion-price-input";
import { AmenitiesListInput } from "../amenities-list-input/amenities-list-input";
import { FormImageInput } from "@/components/forms/form-image-input";
import { GalleryListInput } from "../gallery-list-input";

const roomTypeFormDataSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  roomSize: z
    .number({ message: "Number only" })
    .min(1, { message: "Required" }),
  bedType: z.enum(["single", "double", "queen", "king"], {
    message: "Required",
  }),
  guests: z.number(),
  pricePerNight: z.number().min(0, { message: "Required" }),
  promotionPrice: z.number().optional(),
  hasPromoPrice: z.boolean().optional(),
  mainImageUrl: z.string(),
  amenities: z.array(
    z.object({
      id: z.string().optional(),
      value: z.string().min(1, { message: "Required" }),
    })
  ),
  imageUrls: z
    .array(z.object({ id: z.string().optional(), value: z.string() }))
    .optional(),
});

export interface RoomTypeFormProps {
  mode: "create" | "edit";
  defaultValues: RoomTypeFormData;
  loading: boolean;
  onCancel?: () => void;
  onChange?: (data: RoomTypeFormData) => void;
  onSubmit: (data: RoomTypeFormData) => void;
}

export const RoomTypeForm = ({
  mode,
  defaultValues: room,
  loading,
  onSubmit,
  onCancel,
}: RoomTypeFormProps) => {
  // Hook form

  return (
    <FormProvider<RoomTypeFormData>
      onSubmit={onSubmit}
      resolver={zodResolver(roomTypeFormDataSchema)}
      defaultValues={room}
      disabled={loading}
    >
      <AdminHeader>
        <div className="hidden md:block md:flex-1">
          {mode === "create" ? "Create Room Type" : "Edit Room Type"}
        </div>
        <div className="flex justify-between w-full md:w-auto gap-2">
          {mode === "create" && (
            <Button
              type="button"
              variant="secondary"
              onClick={onCancel}
              disabled={loading}
              className="min-w-24"
            >
              Cancel
            </Button>
          )}
          <Button
            variant="default"
            type="submit"
            disabled={loading}
            className="min-w-24"
          >
            {loading ? (
              <span className="animate-spin">
                <LoaderCircle />
              </span>
            ) : mode === "create" ? (
              "Create"
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </AdminHeader>

      <div className="bg-gray-100 w-full md:p-8">
        <Paper>
          <Column>
            <FormTextInput label="Room Type" name="name" />
            <Row>
              <div className="flex-1">
                <FormTextInput
                  label="Room Size(sqm)"
                  name="roomSize"
                  type="number"
                />
              </div>
              <div className="flex-1">
                <FormSelect
                  label="Bed Type"
                  name="bedType"
                  placeholder="Select bed type"
                  options={[
                    { value: "single", label: "Single" },
                    { value: "double", label: "Double" },
                    { value: "queen", label: "Queen" },
                    { value: "king", label: "King" },
                  ]}
                />
              </div>
            </Row>
            <Row>
              <div className="flex-1">
                <FormSelect
                  label="Guest(s)"
                  name="guests"
                  placeholder="Select number of guests"
                  options={[
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                    { value: 4, label: "4" },
                    { value: 5, label: "5" },
                    { value: 6, label: "6" },
                  ]}
                />
              </div>
              <div className="flex-1 hidden md:flex"></div>
            </Row>
            <Row>
              <div className="flex-1">
                <FormTextInput
                  label="Price per Night(THB)"
                  name="pricePerNight"
                  type="number"
                />
              </div>
              <div className="flex-1 items-end hidden md:flex">
                <PromotionPriceInput />
              </div>
            </Row>

            <div className="md:hidden">
              <PromotionPriceInput />
            </div>

            <Divider />

            <h3>Room Image</h3>

            <FormImageInput name="mainImageUrl" label="Main Image" />

            <Divider />

            <h3>Gallery Images</h3>

            <GalleryListInput />

            <Divider />

            <h3>Amenities</h3>

            <AmenitiesListInput />
          </Column>
        </Paper>
      </div>
    </FormProvider>
  );
};
