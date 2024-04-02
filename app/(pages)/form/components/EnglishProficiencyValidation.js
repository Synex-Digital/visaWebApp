import React from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";

const EnglishProficiencyValidation = ({ nextStep, prevStep, step, setStep, returnToLang }) => {
  const handleClick = (cardInfo) => {
    if (cardInfo === "yes") {
      console.log('English proficiency => ', cardInfo)
      setStep(step + 2)
    } else {
      console.log('English proficiency => ', cardInfo)
      nextStep();
    }
  };
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            prevStep={prevStep}
            heading="Do you have a valid English Proficiency Certificate?"
            subHeading=""
            returnToLang={returnToLang}
          />
          <div className="flex justify-center gap-x-8 mt-10">
            <CheckCard
              onClick={handleClick}
              cardInfo="yes"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462007847.svg"
            />
            <CheckCard
              onClick={handleClick}
              cardInfo="no"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462043676.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EnglishProficiencyValidation;
