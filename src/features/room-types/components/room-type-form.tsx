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
import { RoomTypeFormData } from "../types/room-type";

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
});

export interface RoomTypeFormProps {
  mode: "create" | "edit";
  defaultValues: RoomTypeFormData;
  loading: boolean;
  onChange?: (data: RoomTypeFormData) => void;
  onSubmit: (data: RoomTypeFormData) => void;
}

export const RoomTypeForm = ({
  mode,
  defaultValues: room,
  loading,
  onSubmit,
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
        <div>Create New Room</div>
        <div className="mr-4 flex gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="default" type="submit">
            {mode === "create" ? "Create" : "Update"}
          </Button>
        </div>
      </AdminHeader>

      <div className="p-8 bg-gray-100 h-screen">
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
              <div className="flex-1"></div>
            </Row>
            <Row>
              <div className="flex-1">
                <FormTextInput
                  label="Price per Night(THB)"
                  name="pricePerNight"
                  type="number"
                />
              </div>
              <div className="flex flex-1 items-end">
                <div className="flex-1  h-full flex items-center pt-6">
                  <input
                    type="checkbox"
                    name="promotionPriceIncluded"
                    className="mr-2"
                  />
                  <span>Promotion Price</span>
                </div>
                <div className="flex-3">
                  <FormTextInput name="promotionPrice" type="number" />
                </div>
              </div>
            </Row>
          </Column>
        </Paper>
      </div>
    </FormProvider>
  );
};
