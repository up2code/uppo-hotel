export const paths = {
  home: () => "/",
  api: {
    roomTypes: {
      list: () => "/api/room-types",
      details: (id: string) => `/api/room-types/${id}`,
    },
  },
  admin: {
    bookings: {
      list: () => "/admin/bookings",
    },
    dashboard: () => "/admin/dashboard",
    chatbot: () => "/admin/chatbot",
    rooms: {
      list: () => "/admin/rooms",
    },
    hotel: () => "/admin/hotel",
    roomTypes: {
      list: () => "/admin/room-types",
      create: () => "/admin/room-types/create",
      edit: (id: string) => `/admin/room-types/${id}/edit`,
      details: (id: string) => `/admin/room-types/${id}`,
    },
  },
};
