import React from "react";

export interface TemplateProps {
  string?: string;
  number?: number;
  boolean?: boolean;
  array?: string[];
}

export const Template = ({
  string = "Hello, World!",
  number = 42,
  boolean = true,
  array = ["Item 1", "Item 2", "Item 3"],
}: TemplateProps) => {
  return (
    <div className="p-4 border rounded-md shadow-sm w-64">
      <h2 className="text-lg font-semibold mb-2">Template Component</h2>
      <p className="mb-1">
        <strong>String:</strong> {string}
      </p>
      <p className="mb-1">
        <strong>Number:</strong> {number}
      </p>
      <p className="mb-1">
        <strong>Boolean:</strong> {boolean ? "True" : "False"}
      </p>
      <div>
        <strong>Array:</strong>
        <ul className="list-disc list-inside">
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
