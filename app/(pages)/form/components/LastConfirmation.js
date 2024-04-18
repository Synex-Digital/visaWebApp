import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const LastConfirmation = ({ nextStep, prevStep, submitForm }) => {
  const handleSubmit = () => {
    console.log(localStorage.getItem("formData"));
    submitForm();
    nextStep();
  }
  return (
    <>
      <section
        className={`h-dvh w-full bg-BlackShade flex justify-center items-center fixed duration-150 z-30`}
      >
        <div className="max-w-container mx-auto px-2">
          <div className="w-520 pt-8 pb-10 px-6 rounded-20px bg-white flex flex-col items-center">
            <div className="text-[200px] text-yellow-600 mb-4">
              <RiErrorWarningLine />
            </div>
            <h3 className="text-2xl font-medium text-black text-center opacity-80 mb-3">
              Attention
            </h3>
            <h4 className="text-xl text-black text-center opacity-70">
              Are you sure? Your answer can not be changed after submission.
            </h4>
            <div className="w-full flex justify-end mt-6 gap-x-4">
              <button
                onClick={prevStep}
                className="text-lg text-Black font-medium rounded-md px-6 py-2 border-[1px] border-Black uppercase duration-150 hover:border-red-600 hover:text-red-600"
                type="button"
              >
                cancel
              </button>
              <button
              onClick={handleSubmit}
                className="text-lg text-white font-medium rounded-md bg-primaryGreen1 px-6 py-2 border-[1px] border-primaryGreen1 uppercase duration-150 hover:bg-green-400 hover:border-green-400"
                type="button"
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LastConfirmation;
