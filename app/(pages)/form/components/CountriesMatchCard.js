'use client';
import React, { useState } from "react";
import MyImage from "../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const CountriesMatchCard = ({ id, countryName, flag, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected); // Toggle the selection state
    onClick(id); // Pass the clicked card ID to the parent component
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className={`col-span-1 h-20 bg-white p-2.5 flex items-center border border-Ash3 rounded-lg relative cursor-pointer`}
      >
        <MyImage source={flag} alt="flag United Kingdom" className="w-16" />
        <h4 className="text-lg font-medium text-Ash1 ml-5">{countryName}</h4>
        <div className={`${isSelected? 'bg-teal-500 text-Black' : 'bg-Ash3 text-Ash1'}  w-7 h-7 rounded-full flex items-center justify-center absolute top-1/2 right-7  -translate-y-1/2`}>
          <GiCheckMark />
        </div>
      </div>
    </>
  );
};

export default CountriesMatchCard;
