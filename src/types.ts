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
