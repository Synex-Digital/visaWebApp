import React, { useEffect, useState } from "react";

const InputField = ({
  labelIcon,
  placeholder,
  type,
  error,
  errorMessage,
  inputData,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      inputData(inputValue);
    }
  }, [inputValue]);

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
          className={`${error? 'border-red-500 focus:border-red-500' : 'border-Ash1 focus:border-secondaryYellow1'} w-420px border rounded-md p-3 pl-12 focus:outline-0 text-base`}
          type={type}
          id="input"
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <p className="text-red-500 text-sm mt-1.5">{errorMessage}</p>
    </div>
  );
};

export default InputField;
