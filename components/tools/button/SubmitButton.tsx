import React, { ButtonHTMLAttributes, ReactNode } from "react";

const SubmitButton = ({
  children,
  props,
}: {
  children: ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button
      className="w-full px-4 py-3 bg-primary900 rounded-lg text-white"
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
