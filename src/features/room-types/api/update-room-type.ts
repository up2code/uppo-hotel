export interface UpdateRoomResponse {
  success: boolean;
}

export const updateRoom = async () => {
  // Simulate updating room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
};
