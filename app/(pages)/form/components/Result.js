import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import MyImage from "../../../core/MyImage";

const Result = ({ nextStep, prevStep, returnToLang }) => {
  const [results, setResults] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!results || results <= 0 || results > 5 ) {
      setError(true);
      setErrorMessage("Enter Your Result");
    } else {
      setErrorMessage("");
      setError(false);
      console.log(results);
      nextStep();
    }
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Result"
            subHeading=" "
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
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
            error={error}
            errorMessage={errorMessage}
            inputData={setResults}
          />
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default Result;
