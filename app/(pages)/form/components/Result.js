import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import MyImage from "../../../core/MyImage";

const Result = ({
  nextStep,
  prevStep,
  returnToLang,
  formData,
  setFormData,
}) => {
  const [results, setResults] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const verifyGPAInput = (gpaStr) => {
    try {
      const gpa = parseFloat(gpaStr);
      if (Number.isNaN(gpa)) {
        setError(true);
        setErrorMessage("Invalid input. Please enter a numeric value for GPA.");
      } else if (gpa <= 0 || gpa > 5.0) {
        setError(true);
        setErrorMessage("Invalid GPA value. GPA should be between 0 and 5.0.");
      } else {
        if (!gpaStr.includes(".")) {
          setErrorMessage(
            "Invalid input. GPA value should contain a decimal point."
          );
        } else {
          setErrorMessage("");
          setError(false);
          setFormData({ ...formData, results });
          nextStep();
        }
      }
    } catch (error) {
      setValidationResult("An error occurred while validating the GPA.");
    }
  };

  const handleSubmit = () => {
    verifyGPAInput(results);
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
