import React from "react";

function CustomBtn({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="bg-primary w-full py-3 text-white rounded-xl font-bold text-lg hover:bg-primary/80 transition-colors cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  );
}

export default CustomBtn;
