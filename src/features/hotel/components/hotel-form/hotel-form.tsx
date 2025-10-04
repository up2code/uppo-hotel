import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel } from "../../types/hotel";
import { FormProvider } from "@/components/forms/form-provider/form-provider";
import { AdminHeader } from "@/components/layouts/admin-header";
import { Button } from "@/components/shared/button";
import { LoaderCircle } from "lucide-react";
import { Paper } from "@/components/shared/paper";
import { FormTextInput } from "@/components/forms/form-text-input";
import { Column } from "@/components/layouts/column";
import { FormImageInput } from "@/components/forms/form-image-input";

const hotelSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  description: z.string().min(1, { message: "Required" }),
  logoUrl: z.string(),
});

export interface HotelFormProps {
  defaultValues: Hotel;
  loading: boolean;
  onCancel?: () => void;
  onChange?: (data: Hotel) => void;
  onSubmit: (data: Hotel) => void;
}

export const HotelForm = ({
  defaultValues: room,
  loading,
  onSubmit,
}: HotelFormProps) => {
  return (
    <FormProvider<Hotel>
      onSubmit={onSubmit}
      resolver={zodResolver(hotelSchema)}
      defaultValues={room}
      disabled={loading}
    >
      <AdminHeader>
        <div className="hidden md:block md:flex-1">Hotel Information</div>
        <div className="flex justify-between w-full md:w-auto gap-2">
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
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </AdminHeader>

      <div className="bg-gray-100 w-full md:p-8">
        <Paper>
          <Column>
            <FormTextInput label="Hotel name" name="name" />

            <FormTextInput label="Hotel description" name="description" />

            <h3>Hotel logo</h3>

            <FormImageInput name="logoUrl" label="Main Image" />
          </Column>
        </Paper>
      </div>
    </FormProvider>
  );
};
