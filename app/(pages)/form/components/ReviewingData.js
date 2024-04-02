import React, { useState } from "react";
import MyImage from "../../../core/MyImage";
import ReviewCard from "./ReviewCard";

const ReviewingData = ({ prevStep, nextStep }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleSubmit = () => {
    nextStep(
    );
  };
  return (
    <>
      <section className="pb-20">
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
              <ReviewCard isEditable={isEditable} />
            </div>
            {/* buttons */}
            <div className="flex justify-center gap-6 mt-28">
              <button
                onClick={prevStep}
                className="w-40 py-3 border border-primaryGreen1 bg-transparent text-xl font-semibold text-Black duration-150 hover:border-secondaryYellow1 hover:text-secondaryYellow1"
                type="button"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-40 py-3 border border-primaryGreen1 bg-primaryGreen1 text-xl font-semibold text-white duration-150 opacity-90 hover:opacity-100"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewingData;
