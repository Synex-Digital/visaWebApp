import React from "react";
import Link from "next/link";
import MyImage from "../../../core/MyImage";
import MyButton from "../../../core/MyButton";

const StudyAbroadBanner = (props) => {
  const { title, description } = props;
  return (
    <>
      <section className="bg-studyPageBanner relative ">
        <div className="max-w-container h-full mx-auto px-2 pt-14 pb-10 md:pt-32 md:pb-20 flex flex-row gap-4 justify-center items-start relative">
          <div className="w-full">
            <h2 className="text-primary mt-10 mb-6 font-medium text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="text-studyPagePtag text-base md:text-lg mb-8 md:mb-10">
              {description}
            </p>

            <MyButton link="#" className="w-fit">
              Get Started For Free
            </MyButton>
          </div>

          {/* banner hero */}
          <div className="w-2/5 hidden md:block">
            <MyImage
              source="/assets/Banner2/bannerImage2.png"
              alt="bannerImage.png"
              className="w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyAbroadBanner;
