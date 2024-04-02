"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import ContinueBtn from "./ContinueBtn";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({ nextStep, prevStep, returnToLang }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (phone.length <= 4) {
      setError("Enter phone number");
    } else {
      setError("");
      console.log(phone);
      nextStep();
    }
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Phone Number"
            subHeading=" "
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <div className="flex flex-col items-center mt-10">
            <PhoneInput
              defaultCountry="bd"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
            <p className="text-red-500 text-sm mt-1.5">{error}</p>
          </div>
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default PhoneNumber;
