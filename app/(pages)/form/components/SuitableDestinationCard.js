import React, { useState } from "react";
import MyImage from "./../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const SuitableDestinationCard = ({ id, cardHeading, academicRange, icon, onClick, isSelected }) => {

  const handleCardClick = () => {
    onClick(id);
  };
  return (
    <>
      <div
        className="col-span-1 flex items-center bg-white rounded-xl border-2 border-Ash1 p-2.5 relative cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="">
          <MyImage source={icon} alt="icon" className="w-55px" />
        </div>

        <div className="w-56 ml-6">
          <h4 className="text-lg font-medium text-black opacity-75 mb-2">
            {cardHeading}
          </h4>
          <h5 className="text-sm text-ash2">{academicRange}</h5>
        </div>

        <div className={`${isSelected? 'bg-primaryGreen1 text-white' : 'bg-Ash3 text-Ash1'} w-7 h-7 rounded-full flex items-center justify-center absolute top-1/2 right-6 -translate-y-1/2`}>
          <GiCheckMark />
        </div>
      </div>
    </>
  );
};

export default SuitableDestinationCard;
