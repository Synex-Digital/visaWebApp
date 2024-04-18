"use client";
import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { FaPaperPlane } from "react-icons/fa6";

const Email = ({ nextStep, prevStep, returnToLang, formData, setFormData }) => {
  const [validEmail, setValidEmail] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  useEffect(() => {
    setValidEmail(String(email).toLowerCase().match(regex));
  }, [email]);

  const handleSubmit = () => {
    if (validEmail) {
      setErrorMessage("");
      setError(false);
      setFormData({ ...formData, email });
      nextStep();
    } else {
      setError(true);
      setErrorMessage("Please enter an email");
    }
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Email Address"
            subHeading=" "
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <InputField
            labelIcon={<FaPaperPlane />}
            type="email"
            placeholder="Please enter your valid email"
            error={error}
            errorMessage={errorMessage}
            inputData={setEmail}
          />
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default Email;
