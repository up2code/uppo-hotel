import { AdminLayout } from "@/components/admin/layouts/admin-layout";
import React from "react";

export default function Hotel() {
  return (
    <AdminLayout>
      <AdminLayout.Header>
        <div>Hotel Information</div>
        <div className="mr-4">
          <button>Update</button>
        </div>
      </AdminLayout.Header>
      <AdminLayout.Content>
        <div>
          <div className="mb-4 flex flex-col gap-2">
            <label>Hotel Name</label>
            <input type="text" className="p-2 border rounded" />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label>Description</label>
            <textarea className="p-2 border rounded" rows={4}></textarea>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label>Hotel logo</label>
          </div>
        </div>
      </AdminLayout.Content>
    </AdminLayout>
  );
}
