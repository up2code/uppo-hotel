import React from 'react';

interface StackProps {
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  background?: string;
}

const Stack = ({
  children,
  direction = 'column',
  justify,
  align,
  background,
}: StackProps) => {
  return (
    <div
      className={`flex flex-${direction} gap-4 w-full ${
        justify ? `justify-${justify}` : ''
      } ${align ? `items-${align}` : ''} ${
        background ? `bg-${background}` : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Stack;
