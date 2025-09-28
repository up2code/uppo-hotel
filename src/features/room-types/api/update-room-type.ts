import { RoomType } from '../types/room-type';

export interface UpdateRoomResponse {
  success: boolean;
}

export const updateRoom = async (id: string, data: RoomType) => {
  console.log('Updating room', id, data);

  // Simulate updating room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};
