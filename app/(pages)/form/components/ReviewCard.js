import React from "react";
import MyImage from "../../../core/MyImage";

const ReviewCard = ({isEditable}) => {
  return (
    <div className="col-span-1 rounded-xl shadow-md">
      {/* top */}
      <div className="py-4 border-b-[1px] border-slate-300 px-6 flex items-center">
        <h3 className="font-bold text-lg">Assess Your Profile for Suitable Study Destination</h3>
        <span className={`${isEditable? 'block' : 'hidden'} px-2.5 py-0.5 text-sm text-slate-600 rounded border-[1px] border-Ash1 cursor-pointer duration-150 hover:border-secondaryYellow1 hover:text-secondaryYellow1`}>Edit</span>
      </div>
      {/* bottom */}
      <div className="px-6 flex items-center py-2">
        <div className="">
          <MyImage
            source="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623314290.svg"
            alt="icon"
            className="w-14"
          />
        </div>
        <h5 className="ml-3 text-xl py-3">High Academic Profile with Low Financial Affordability</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
