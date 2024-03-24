import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MyImage from "../../../core/MyImage";

const FormHeader = ({heading, subHeading}) => {
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
        <button className="w-11 h-11 rounded-md bg-white text-2xl flex items-center justify-center text-Ash1 border-2 border-Ash3">
          <FaArrowLeft />
        </button>

        <div className="w-10/12">
          <h2 className="text-3xl font-semibold text-Black text-center capitalize">
            {heading}
          </h2>
          <p className="text-base text-black opacity-60 text-center mt-2 capitalize">
            {subHeading}
          </p>
        </div>

        <button className="w-11 h-11 rounded-md bg-white text-2xl flex items-center justify-center text-Ash1 border-2 border-Ash3">
          <IoClose />
        </button>
      </div>
    </>
  );
};

export default FormHeader;
