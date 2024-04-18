import React from "react";
import MyImage from "../../../core/MyImage";

const ReviewCard = ({ isEditable, header, icon, cardInfo, iconSize, className }) => {
  return (
    <div className="col-span-1 rounded-xl shadow-md">
      {/* top */}
      <div className="py-4 border-b-[1px] border-slate-300 px-6 flex items-center">
        <h3 className="font-bold text-lg">{header}</h3>
        <span
          className={`${
            isEditable ? "block" : "hidden"
          } px-2.5 py-0.5 text-sm text-slate-600 rounded border-[1px] border-Ash1 cursor-pointer duration-150 hover:border-secondaryYellow1 hover:text-secondaryYellow1`}
        >
          Edit
        </span>
      </div>
      {/* bottom */}
      <div className="px-6 flex items-center py-5">
        <div className="">
          <MyImage source={icon} alt="icon" className={iconSize} />
        </div>
        <h5 className={`ml-3 mb-1 text-xl capitalize ${className}`}>{cardInfo}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
