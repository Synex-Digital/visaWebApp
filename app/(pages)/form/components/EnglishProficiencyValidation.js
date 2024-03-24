import React from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";

const EnglishProficiencyValidation = () => {
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Do you have a valid English Proficiency Certificate?"
            subHeading=""
          />
          <div className="flex justify-center gap-x-8 mt-10">
            <CheckCard
              cardInfo="yes"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462007847.svg"
            />
            <CheckCard
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
