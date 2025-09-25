import { Paper } from "@/components/shared/paper";
import { Textarea } from "@/components/shared/text-area";
import React from "react";
import { ChatbotReplySetupBlock } from "./chatbot-reply-setup-block";
import { ChatbotReplySetupList } from "./chatbot-reply-setup-list";
import { Column } from "../layouts/column";
import { nanoid } from "nanoid";
import { ArrayInputProvider } from "@/providers/array-input-provider";

export interface ChatbotSetupFormProps {
  // Define any props if needed
  greetingMessage?: string;
  autoReplyMessage?: string;
  chatbotReplySetups?: ChatbotReplySetup[];
}

export const ChatbotSetupForm = ({
  greetingMessage = "",
  autoReplyMessage = "",
  chatbotReplySetups = [
    {
      id: nanoid(),
    },
  ],
}: // onSubmit, --- IGNORE ---
ChatbotSetupFormProps) => {
  return (
    <Paper>
      <Column>
        <h2>Default Chatbot Message</h2>

        <Textarea
          label="Chatbot Description"
          placeholder="Enter description..."
          defaultValue={greetingMessage}
        />

        <Textarea
          label="Chatbot Description"
          placeholder="Enter description..."
          defaultValue={autoReplyMessage}
        />

        <div className="flex flex-col gap-4 mt-4">
          <ArrayInputProvider values={chatbotReplySetups}>
            <ChatbotReplySetupList />
          </ArrayInputProvider>
        </div>
      </Column>
    </Paper>
  );
};
