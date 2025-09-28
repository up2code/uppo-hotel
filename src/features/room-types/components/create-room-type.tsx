import React from 'react';
import { RoomTypeForm } from './room-type-form';
import { useCreateRoomType } from '../api/create-room-type';
import { useNotify } from '@/hooks/useNotify';
import { RoomType } from '../types/room-type';

export const CreateRoomType = () => {
  const notify = useNotify();
  const { data: createdResponse, loading, mutate } = useCreateRoomType();

  const onCreate = (data: RoomType) => {
    console.log('Creating room type with data:', data);
    mutate(data);
  };

  if (createdResponse) {
    notify('Room type created successfully');
  }

  return (
    <RoomTypeForm
      mode="create"
      defaultValues={
        {
          // amenities: [""],
        }
      }
      loading={loading}
      onSubmit={onCreate}
    />
  );
};
