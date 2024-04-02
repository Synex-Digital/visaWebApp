import React from "react";
import MyImage from "../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const CourseName = ({ id, course, imgLink, onClick, isSelected }) => {
  const handleCardClick = () => {
    onClick(id);
  };
  return (
    <>
      <div
        onClick={handleCardClick}
        className="col-span-1 h-90px bg-white p-2.5 flex items-center border border-Ash3 rounded-lg relative cursor-pointer"
      >
        <MyImage source={imgLink} alt="flag United Kingdom" className="w-16" />
        <h4 className="text-lg font-medium text-Ash1 ml-7">{course}</h4>
        <div
          className={`${
            isSelected ? "bg-primaryGreen1 text-white" : "bg-Ash3 text-Ash1"
          } w-7 h-7 rounded-full flex items-center justify-center absolute top-1/2 right-6 -translate-y-1/2`}
        >
          <GiCheckMark />
        </div>
      </div>
    </>
  );
};

export default CourseName;
