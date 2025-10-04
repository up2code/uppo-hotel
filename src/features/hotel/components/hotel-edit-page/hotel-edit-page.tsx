import { useNotify } from "@/hooks/useNotify";
import * as React from "react";
import { useUpdateHotel } from "../../api/update-hotel";
import { useGetHotel } from "../../api/get-hotel";
import { Hotel } from "../../types/hotel";
import { CenterLoading } from "@/components/ui/center-loading";
import { HotelForm } from "../hotel-form";

export const HotelEditPage = () => {
  const notify = useNotify();
  const { loading, mutate } = useUpdateHotel();
  const { data: hotelData, isLoading: fetching } = useGetHotel();

  const onUpdateSuccess = () => {
    notify("Hotel information updated successfully");
  };

  const onUpdateError = (error: Error) => {
    notify(`Update failed: ${error.message}`);
  };

  const onUpdate = (data: Hotel) => {
    mutate(data, {
      onSuccess: onUpdateSuccess,
      onError: onUpdateError,
    });
  };

  if (fetching) {
    return <CenterLoading />;
  }

  if (!hotelData) {
    return <div>Hotel information not found</div>;
  }

  return (
    <HotelForm
      defaultValues={hotelData}
      loading={loading}
      onSubmit={onUpdate}
    />
  );
};
