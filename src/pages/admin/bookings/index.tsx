import React from "react";
import mockData from "./bookings-data.json";
import { AdminLayout } from "@/components/admin/layouts/admin-layout";

const PaginationControls = () => {
  return (
    <div className="mt-4 flex justify-center space-x-2">
      <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
      <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  );
};

export default function Booking() {
  return (
    <AdminLayout>
      <AdminLayout.Header>
        <div>CustomerBooking</div>
        <div className="mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded"
          />
        </div>
      </AdminLayout.Header>

      <AdminLayout.Content>
        <div className="flex items-center justify-center p-8">
          <div>
            <table className="bg-white">
              <thead className="bg-[#E4E6ED] font-normal">
                <tr>
                  <th>Customer Name</th>
                  <th>Guests</th>
                  <th>Room Type</th>
                  <th>Amount</th>
                  <th>Bed Type</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.customerName}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.roomType}</td>
                    <td>{booking.amount}</td>
                    <td>{booking.bedType}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <PaginationControls />
          </div>
        </div>
      </AdminLayout.Content>
    </AdminLayout>
  );
}
