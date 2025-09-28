import React from "react";

export interface PlaygroundProps {
  string?: string;
}

export const Playground = ({ string = "Hello, World!" }: PlaygroundProps) => {
  return <div>Test: {string}</div>;
};
