import { useQuery } from "@/hooks/useQuery";
import { RoomType } from "../types/room-type";

export interface PaginationResponse<T> {
  total: number;
  page: number;
  pageSize: number;
  items: T[];
}

export const useListRoomType = (key: string) => {
  return useQuery<PaginationResponse<RoomType>>(key, () => listRoomTypes());
};

export const listRoomTypes = async (): Promise<
  PaginationResponse<RoomType>
> => {
  // Simulate fetching room data by ID
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    total: mockRoomTypes.length,
    page: 0,
    pageSize: 10,
    items: mockRoomTypes,
  } as PaginationResponse<RoomType>;
};

const mockRoomTypes: RoomType[] = [
  {
    id: "1",
    name: "Deluxe King Suite",
    roomSize: 450,
    bedType: "king",
    guests: 2,
    pricePerNight: 299.99,
    promotionPrice: 249.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    amenities: [
      "Wi-Fi",
      "Mini Bar",
      "City View",
      "Room Service",
      "Air Conditioning",
      "Balcony",
    ],
  },
  {
    id: "2",
    name: "Standard Double Room",
    roomSize: 300,
    bedType: "double",
    guests: 2,
    pricePerNight: 149.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Private Bathroom"],
  },
  {
    id: "3",
    name: "Family Suite",
    roomSize: 600,
    bedType: "queen",
    guests: 6,
    pricePerNight: 399.99,
    promotionPrice: 349.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: [
      "Wi-Fi",
      "Kitchenette",
      "Living Room",
      "Balcony",
      "Air Conditioning",
      "Mini Bar",
      "Extra Beds",
    ],
  },
  {
    id: "4",
    name: "Executive Business Room",
    roomSize: 350,
    bedType: "queen",
    guests: 2,
    pricePerNight: 249.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: [
      "Wi-Fi",
      "Work Desk",
      "Business Center Access",
      "Coffee Machine",
      "Air Conditioning",
    ],
  },
  {
    id: "5",
    name: "Ocean View Premium",
    roomSize: 400,
    bedType: "king",
    guests: 3,
    pricePerNight: 449.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    amenities: [
      "Wi-Fi",
      "Ocean View",
      "Balcony",
      "Mini Bar",
      "Room Service",
      "Premium Toiletries",
    ],
  },
  {
    id: "6",
    name: "Budget Single Room",
    roomSize: 200,
    bedType: "single",
    guests: 1,
    pricePerNight: 89.99,
    promotionPrice: 69.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1540518614846-7eded47fa551?w=800",
    amenities: ["Wi-Fi", "Air Conditioning", "TV", "Private Bathroom"],
  },
  {
    id: "7",
    name: "Honeymoon Suite",
    roomSize: 500,
    bedType: "king",
    guests: 2,
    pricePerNight: 599.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    amenities: [
      "Wi-Fi",
      "Jacuzzi",
      "Champagne Service",
      "Rose Petals",
      "City View",
      "Mini Bar",
      "Romantic Lighting",
    ],
  },
  {
    id: "8",
    name: "Twin Bed Room",
    roomSize: 320,
    bedType: "single",
    guests: 2,
    pricePerNight: 179.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    amenities: [
      "Wi-Fi",
      "Air Conditioning",
      "TV",
      "Mini Fridge",
      "Private Bathroom",
      "Two Single Beds",
    ],
  },
  {
    id: "9",
    name: "Penthouse Suite",
    roomSize: 800,
    bedType: "king",
    guests: 4,
    pricePerNight: 999.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    amenities: [
      "Wi-Fi",
      "Private Terrace",
      "Panoramic Views",
      "Butler Service",
      "Hot Tub",
      "Full Kitchen",
      "Living Room",
    ],
  },
  {
    id: "10",
    name: "Accessible Queen Room",
    roomSize: 350,
    bedType: "queen",
    guests: 2,
    pricePerNight: 159.99,
    promotionPrice: 139.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1594736797933-d0beb7985eb1?w=800",
    amenities: [
      "Wi-Fi",
      "Wheelchair Accessible",
      "Roll-in Shower",
      "Lowered Fixtures",
      "Air Conditioning",
    ],
  },
  {
    id: "11",
    name: "Garden View Deluxe",
    roomSize: 380,
    bedType: "queen",
    guests: 2,
    pricePerNight: 219.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: [
      "Wi-Fi",
      "Garden View",
      "Balcony",
      "Mini Bar",
      "Air Conditioning",
      "Coffee Machine",
    ],
  },
  {
    id: "12",
    name: "Studio Apartment",
    roomSize: 400,
    bedType: "queen",
    guests: 2,
    pricePerNight: 189.99,
    promotionPrice: 169.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    amenities: [
      "Wi-Fi",
      "Full Kitchenette",
      "Living Area",
      "Washing Machine",
      "Air Conditioning",
    ],
  },
  {
    id: "13",
    name: "Presidential Suite",
    roomSize: 1200,
    bedType: "king",
    guests: 6,
    pricePerNight: 1299.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    amenities: [
      "Wi-Fi",
      "Personal Concierge",
      "Private Dining",
      "Multiple Bedrooms",
      "Office Space",
      "Wine Cellar",
    ],
  },
  {
    id: "14",
    name: "Pool View Room",
    roomSize: 360,
    bedType: "king",
    guests: 3,
    pricePerNight: 269.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800",
    amenities: [
      "Wi-Fi",
      "Pool View",
      "Pool Access",
      "Mini Bar",
      "Air Conditioning",
      "Poolside Service",
    ],
  },
  {
    id: "15",
    name: "Junior Suite",
    roomSize: 420,
    bedType: "queen",
    guests: 2,
    pricePerNight: 199.99,
    promotionPrice: 179.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: [
      "Wi-Fi",
      "Seating Area",
      "Mini Fridge",
      "Air Conditioning",
      "Work Desk",
      "City View",
    ],
  },
  {
    id: "16",
    name: "Mountain View Cabin",
    roomSize: 480,
    bedType: "double",
    guests: 4,
    pricePerNight: 329.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    amenities: [
      "Wi-Fi",
      "Mountain View",
      "Fireplace",
      "Kitchenette",
      "Balcony",
      "Hiking Trail Access",
    ],
  },
  {
    id: "17",
    name: "Family Connecting Rooms",
    roomSize: 600,
    bedType: "double",
    guests: 8,
    pricePerNight: 349.99,
    promotionPrice: 299.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800",
    amenities: [
      "Wi-Fi",
      "Connecting Doors",
      "Multiple Bathrooms",
      "Mini Fridges",
      "Air Conditioning",
      "Family Games",
    ],
  },
  {
    id: "18",
    name: "Spa Wellness Room",
    roomSize: 400,
    bedType: "king",
    guests: 2,
    pricePerNight: 379.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    amenities: [
      "Wi-Fi",
      "In-room Spa Services",
      "Aromatherapy",
      "Yoga Mats",
      "Meditation Space",
      "Organic Minibar",
    ],
  },
  {
    id: "19",
    name: "Modern Loft Style",
    roomSize: 450,
    bedType: "queen",
    guests: 3,
    pricePerNight: 289.99,
    promotionPrice: 259.99,
    hasPromoPrice: true,
    mainImageUrl:
      "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800",
    amenities: [
      "Wi-Fi",
      "High Ceilings",
      "Modern Design",
      "City View",
      "Mini Bar",
      "Sound System",
    ],
  },
  {
    id: "20",
    name: "Vintage Classic Room",
    roomSize: 340,
    bedType: "double",
    guests: 2,
    pricePerNight: 229.99,
    hasPromoPrice: false,
    mainImageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    amenities: [
      "Wi-Fi",
      "Vintage Decor",
      "Antique Furnishings",
      "Classic Bathroom",
      "Air Conditioning",
      "Tea Service",
    ],
  },
];
