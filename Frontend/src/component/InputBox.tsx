import React, { ChangeEvent } from "react";
interface InputType {
  lable: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const InputBox = ({ lable, placeholder, onChange, type }: InputType) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {lable}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
