import { AnimatePresence, Reorder } from "motion/react";
import { ChatbotReplySetupBlock } from "./chatbot-reply-setup-block";
import React, { createContext, use } from "react";
import { useArrayInput } from "@/providers/array-input-provider";
import { Column } from "../layouts/column";
import { Button } from "@/components/shared/button";
import { nanoid } from "nanoid";

export interface ChatbotReplySetupListProps {
  setups: ChatbotReplySetup[];
}

export interface ChatbotReplySetupListContextProps {
  editingSetupId: string | null;
  onEditId: (id: string) => void;
}

const ChatbotReplySetupListContext = createContext<
  ChatbotReplySetupListContextProps | undefined
>(undefined);

export function useChatbotReplySetupList() {
  const context = use(ChatbotReplySetupListContext);
  if (!context) {
    throw new Error(
      "useChatbotReplySetupList must be used within a ChatbotReplySetupListProvider"
    );
  }
  return context;
}

export const ChatbotReplySetupList = () => {
  const { items, add, remove, reset } = useArrayInput<ChatbotReplySetup>();
  const [editingSetupId, setEditingSetupId] = React.useState<string | null>(
    null
  );

  const onDragEnd = (newFields: ChatbotReplySetup[]) => {
    reset(newFields);
  };

  const onEditId = (id: string) => {
    setEditingSetupId(id);
  };

  const onClickAdd = () => {
    add({ id: nanoid() });
  };

  return (
    <ChatbotReplySetupListContext
      value={{
        onEditId,
        editingSetupId,
      }}
    >
      <Column>
        <Reorder.Group
          className="flex flex-col gap-4"
          axis="y"
          values={items}
          onReorder={onDragEnd}
        >
          {items.map((setup, index) => (
            <Reorder.Item key={setup.id} className="w-full" value={setup}>
              <ChatbotReplySetupBlock
                setup={setup}
                readOnly={!editingSetupId || editingSetupId !== setup.id}
                onClickEdit={() => onEditId(setup.id)}
                onDelete={() => remove(index)}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <Button variant="secondary" className="max-w-72" onClick={onClickAdd}>
          + Add suggestion menu
        </Button>
      </Column>
    </ChatbotReplySetupListContext>
  );
};
