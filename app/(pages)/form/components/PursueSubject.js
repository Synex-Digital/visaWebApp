import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import MyImage from "../../../core/MyImage";

const PursueSubject = ({
  nextStep,
  prevStep,
  returnToLang,
  formData,
  setFormData,
}) => {
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (subject) {
      setErrorMessage("");
      setError(false);
      setFormData({ ...formData, pursueSubject: subject });
      nextStep();
    } else {
      setError(true);
      setErrorMessage("Enter Subject Name");
    }
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Which subject do you want to pursue for your Bachelor/Masters?"
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
            type="text"
            placeholder="Example: BBA - Marketing, Civil Engineering, Social Science, etc"
            error={error}
            errorMessage={errorMessage}
            inputData={setSubject}
          />
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default PursueSubject;
