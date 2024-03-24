import React from "react";

const InputField = ({ labelIcon, placeholder, type, error }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="relative">
        <label
          className="absolute top-1/2 left-4 -translate-y-1/2 text-lg text-primaryGreen1"
          htmlFor="input"
        >
          {labelIcon}
        </label>
        <input
          className="w-420px border border-Ash1 rounded-md p-3 pl-12 focus:outline-0 focus:border-secondaryYellow1 text-base"
          type={type}
          id="input"
          placeholder={placeholder}
        />
      </div>
      <p className="text-red-500 text-sm mt-1.5">{error}</p>
    </div>
  );
};

export default InputField;
