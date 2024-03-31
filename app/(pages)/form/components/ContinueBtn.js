import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContinueBtn = ({ nextStep, isBtnDisabled, setIsBtnDisabled }) => {
  const handleContinue = () => {
    nextStep();
  };
  return (
    <div className="bg-white shadow-md py-3 fixed bottom-0 left-0 w-full flex justify-center duration-300">
      <button
        onClick={handleContinue}
        className={`${isBtnDisabled? 'bg-Ash3 text-Black hover:text-white cursor-not-allowed' : 'bg-[#2a2e6a] text-white opacity-90 hover:opacity-100 cursor-pointer'} px-5 py-2 font-medium flex items-center duration-150 rounded-md`}
        type="button"
        disabled={isBtnDisabled}
      >
        Continue <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default ContinueBtn;
