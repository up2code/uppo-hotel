interface RoomType {
  id?: string;
  name?: string;
  roomSize?: string;
  bedType?: string;
  guests?: number;
  price?: string;
  promotionPrice?: string;
  description?: string;
  amenities?: string[];
  mainImage?: string;
  additionalImages?: string[];
}

interface ChatbotReplyOption {
  name?: string;
  detail?: string;
}

interface ChatbotReplySetup {
  id: string;
  topic?: string;
  replyFormat?: "room-type" | "message" | "options" | undefined;
  replyTitle?: string;
  replyMessage?: string;
  roomType?: string;
  buttonNameType?: string;
  options?: ChatbotReplyOption[];
}
