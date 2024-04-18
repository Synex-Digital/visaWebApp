"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { MdLabel } from "react-icons/md";

const FullName = ({
  nextStep,
  prevStep,
  returnToLang,
  formData,
  setFormData,
}) => {
  const [fullName, setFullName] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (fullName) {
      setErrorMessage("");
      setError(false);
      setFormData({ ...formData, fullName });
      nextStep();
    } else {
      setError(true);
      setErrorMessage("Enter Your Name");
    }
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Full Name"
            subHeading=" "
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <InputField
            className="!capitalize"
            labelIcon={<MdLabel />}
            type="text"
            placeholder="Please enter your name as per your passport"
            errorMessage={errorMessage}
            error={error}
            inputData={setFullName}
          />
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default FullName;
