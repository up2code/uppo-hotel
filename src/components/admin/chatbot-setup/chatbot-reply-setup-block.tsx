import { TextInput } from "@/components/shared/text-input";
import { GripVertical, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/shared/button";
import { Dropdown } from "@/components/shared/dropdown";
import { Row } from "../layouts/row";
import { Column } from "../layouts/column";
import {
  ArrayInputProvider,
  useArrayInput,
} from "@/providers/array-input-provider";
import React from "react";

export interface ChatbotReplySetupBlockProps {
  readOnly?: boolean;
  disabled?: boolean;
  setup: ChatbotReplySetup;
  onClickEdit?: (id: string) => void;
  onDelete?: () => void;
  onSave?: () => void;
}

const ReplyOptionsList = () => {
  const { items, add } = useArrayInput<ChatbotReplyOption>();

  const handleAddOption = () => {
    add({ name: "", detail: "" });
  };

  return (
    <Column>
      {items.map((option, index) => (
        <Row key={index}>
          <TextInput
            label="Option"
            placeholder="Single Room"
            defaultValue={option.name}
          />
          <TextInput
            label="Detail"
            placeholder="A cozy room for one"
            defaultValue={option.detail}
          />
        </Row>
      ))}
      <Button
        variant="secondary"
        className="max-w-32"
        onClick={handleAddOption}
      >
        + Add Option
      </Button>
    </Column>
  );
};

export const ChatbotReplySetupBlock = ({
  setup,
  readOnly,
  onDelete,
  onSave,
  onClickEdit,
}: ChatbotReplySetupBlockProps) => {
  const {
    id,
    topic,
    replyFormat,
    replyTitle,
    replyMessage,
    roomType,
    buttonNameType,
    options,
  } = setup;

  const handleClickEdit = () => {
    onClickEdit?.(id);
  };

  const handleClickDelete = () => {
    onDelete?.();
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-[#F6F7FD] rounded-md min-w-[600px]">
      <div className="flex flex-row gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <Row>
            <TextInput
              label="Topic"
              placeholder="Room Types"
              defaultValue={topic || ""}
            />
            <Dropdown
              defaultValue={replyFormat}
              label="Reply format"
              options={[
                { label: "Room type", value: "room-type" },
                { label: "Message", value: "message" },
                { label: "Option with details", value: "options" },
              ]}
            />
          </Row>

          <Column hidden={replyFormat !== "room-type"}>
            <TextInput
              label="Reply title"
              placeholder="Reply title"
              defaultValue={replyTitle || ""}
            />
            <TextInput
              label="Room type"
              placeholder="Room type"
              defaultValue={roomType || ""}
            />
            <TextInput
              label="Button name type"
              placeholder="Button name type"
              defaultValue={buttonNameType || ""}
            />
          </Column>

          <Column hidden={replyFormat !== "message"}>
            <TextInput
              label="Reply message"
              placeholder="Reply message"
              defaultValue={replyMessage || ""}
            />
          </Column>

          <Column hidden={replyFormat !== "options"}>
            <ArrayInputProvider values={options || []}>
              <ReplyOptionsList />
            </ArrayInputProvider>
          </Column>
        </div>

        <div className="flex flex-col gap-4">
          <GripVertical className="cursor-move" size={16} />
          <Pencil
            className="cursor-pointer"
            size={16}
            onClick={handleClickEdit}
          />
          <Trash
            className="cursor-pointer"
            size={16}
            onClick={handleClickDelete}
          />
        </div>
      </div>
      <Row hidden={readOnly} className="justify-end gap-2">
        <Button variant="default">Save</Button>
        <Button variant="ghost">Cancel</Button>
      </Row>
    </div>
  );
};
