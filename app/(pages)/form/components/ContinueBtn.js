import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContinueBtn = () => {
  return (
    <div className="bg-white shadow-md py-3 fixed bottom-0 left-0 w-full flex justify-center duration-300">
      <button
        className="px-5 py-2 bg-Ash3 cursor-not-allowed font-medium text-Black flex items-center hover:text-white duration-150 rounded-md"
        type="button"
        disabled
      >
        Continue <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default ContinueBtn;
