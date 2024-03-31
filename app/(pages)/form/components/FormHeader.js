"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MyImage from "../../../core/MyImage";
import { FaCircleExclamation } from "react-icons/fa6";

const FormHeader = ({ heading, subHeading, prevStep, setStep }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(true);
  };
  const handleNoBtn = () => {
    setIsOpen(false);
  };
  const handleYesBtn = () => {
    setStep(1)
  };
  return (
    <>
      <div className="py-7">
        <MyImage
          source="/assets/Logos/PrimaryLogoNavyBlue.png"
          alt="PrimaryLogoNavyBlue.png"
          className="w-36 mx-auto"
        />
      </div>
      <div className="flex items-center justify-between pb-5">
        <button
          onClick={prevStep}
          className="w-11 h-11 rounded-md bg-white text-2xl flex items-center justify-center text-Ash1 border-2 border-Ash3"
        >
          <FaArrowLeft />
        </button>

        <div className="w-10/12">
          <h2 className="text-4xl font-bold leading-[140%] text-Black text-center capitalize">
            {heading}
          </h2>
          <p className="text-base text-black opacity-60 text-center mt-2 capitalize">
            {subHeading}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handleClose}
            className="w-11 h-11 rounded-md bg-white text-2xl flex items-center justify-center text-Ash1 border-2 border-Ash3"
          >
            <IoClose />
          </button>
          <div
            className={`${!isOpen? 'opacity-0 scale-75' : 'opacity-100 scale-100'} min-w-max absolute bottom-full right-0 px-3 py-2.5 rounded-lg bg-white shadow-2xl translate-y-2.5 duration-200`}
          >
            <div className="flex items-center mb-3">
              <div className="text-yellow-500 text-lg mr-2">
                <FaCircleExclamation />
              </div>
              <h6 className="text-sm text-Black">
                Are you sure to close this journey?
              </h6>
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="text-sm text-Black border-[1px] border-Ash1 duration-150 hover:text-[#4096ff] hover:border-[#4096ff] px-2 py-0.5 rounded-md"
                type="button"
                onClick={handleNoBtn}
              >
                No
              </button>
              <button
                className="text-sm text-white border-[1px] border-[#ff4d4f] duration-150 hover:border-Black hover:bg-Black px-2 py-0.5 rounded-md bg-[#ff4d4f]"
                type="button"
                onClick={handleYesBtn}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHeader;
