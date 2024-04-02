import React from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";

const EnglishProficiencyNeed = ({ nextStep, prevStep, returnToLang }) => {
  const handleClick = (cardInfo) => {
    console.log("EnglishProficiencyNeed => ", cardInfo);
    nextStep()
  };
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            prevStep={prevStep}
            heading="Are you willing to take the English Proficiency Test?"
            subHeading=""
            returnToLang={returnToLang}
          />
          <div className="flex justify-center gap-x-8 mt-10">
            <CheckCard
              onClick={handleClick}
              cardInfo="no"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462043676.svg"
            />
            <CheckCard
              onClick={handleClick}
              cardInfo="yes"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462007847.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EnglishProficiencyNeed;
