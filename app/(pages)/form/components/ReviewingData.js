import React from "react";
import MyImage from "../../../core/MyImage";
import ReviewCard from "./ReviewCard";

const ReviewingData = () => {
  return (
    <>
      <section className="">
        <div className="max-w-container mx-auto px-2">
          <div className="">
            {/* logo */}
            <div className="pt-6">
              <MyImage
                source="/assets/Logos/PrimaryLogoNavyBlue.png"
                alt="PrimaryLogoNavyBlue.png"
                className="w-36 mx-auto"
              />
            </div> 
            {/* heading */}
            <div className="w-full">
              <h2 className="text-4xl font-bold leading-[140%] text-Black text-center capitalize my-5">
                Please check before submitting
              </h2>
              <p className="text-xl font-semibold text-black opacity-60 text-center mt-2 capitalize px-5">
                Please note that you will not be able to change your answers
                after clicking the submit button. We would like to recommend you
                to check your answers before clicking the submit button.
              </p>
            </div>
            {/* cards */}
            <div className="mt-10 grid grid-cols-3 gap-7">
              <ReviewCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewingData;
