import React from "react";
import MyImage from "../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const CountriesMatchCard = ({id, countryName, flag}) => {
  return (
    <>
      <div key={id} className="col-span-1 h-20 bg-white p-2.5 flex items-center border border-Ash3 rounded-lg relative cursor-pointer">
        <MyImage
          source={flag}
          alt="flag United Kingdom"
          className="w-16"
        />
        <h4 className="text-lg font-medium text-Ash1 ml-5">{countryName}</h4>
        <div className="w-7 h-7 bg-Ash3 rounded-full text-Ash1 flex items-center justify-center absolute top-1/2 right-7  -translate-y-1/2">
          <GiCheckMark />
        </div>
      </div>
    </>
  );
};

export default CountriesMatchCard;
