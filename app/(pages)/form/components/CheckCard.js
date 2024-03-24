import React from "react";
import MyImage from "./../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const CheckCard = ({ cardInfo, imageLink }) => {
  return (
    <>
      <div className="px-12 pt-8 pb-16 rounded-2xl bg-white inline-block border border-Ash3 hover:border-Black duration-150 cursor-pointer overflow-hidden relative">
        <MyImage
          source={imageLink}
          alt=""
          className="w-32"
        />
        <h5 className="text-xl font-medium text-Black text-center mt-12 capitalize">{cardInfo}</h5>
        <div className="w-7 h-7 bg-Ash3 rounded-full text-Ash1 flex items-center justify-center absolute top-4 right-4 ">
          <GiCheckMark />
        </div>

        <div className="bg-primaryGreen1 opacity-10 w-96 h-96 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </>
  );
};

export default CheckCard;
