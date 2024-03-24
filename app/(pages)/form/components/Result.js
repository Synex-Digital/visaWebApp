import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import MyImage from "../../../core/MyImage";

const Result = () => {
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Result" subHeading=" " />
          <InputField
            labelIcon={
              <MyImage
                source="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870561347.svg"
                alt="icon"
                className="w-6"
              />
            }
            type="number"
            placeholder="Example: GPA - 5.0, CGPA 3.6"
            error=""
          />
        </div>
        <ContinueBtn />
      </section>
    </>
  );
};

export default Result;
