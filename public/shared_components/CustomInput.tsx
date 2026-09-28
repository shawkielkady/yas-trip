import React from "react";

function CustomInput({
  label,
  placeholder,
  required,
  value,
  onChange,
  helperText,
  id,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  id: string;
}) {
  return (
    <>
      <div className="flex justify-between">
        <label htmlFor={id} className="block text-sm font-bold text-secondary">
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
        {helperText && (
          <span className="text-gray-500 text-xs">{helperText}</span>
        )}
      </div>

      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-xl border border-gray-200 bg-bg-main text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    </>
  );
}

export default CustomInput;
