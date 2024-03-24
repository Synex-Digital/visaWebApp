import React from "react";
import MyImage from "../../../core/MyImage";
import { GiCheckMark } from "react-icons/gi";

const CourseName = ({ id, course, imgLink }) => {
  return (
    <>
      <div
        key={id}
        className="col-span-1 h-90px bg-white p-2.5 flex items-center border border-Ash3 rounded-lg relative cursor-pointer"
      >
        <MyImage source={imgLink} alt="flag United Kingdom" className="w-16" />
        <h4 className="text-lg font-medium text-Ash1 ml-7">{course}</h4>
        <div className="w-7 h-7 bg-Ash3 rounded-full text-Ash1 flex items-center justify-center absolute top-1/2 right-7  -translate-y-1/2">
          <GiCheckMark />
        </div>
      </div>
    </>
  );
};

export default CourseName;
