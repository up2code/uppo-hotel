export const paths = {
  home: () => "/",
  api: {
    roomTypes: {
      list: () => "/api/room-types",
    },
  },
  admin: {
    roomTypes: {
      list: () => "/admin/room-types",
      create: () => "/admin/room-types/create",
      edit: (id: string) => `/admin/room-types/${id}/edit`,
      details: (id: string) => `/admin/room-types/${id}`,
    },
  },
};
