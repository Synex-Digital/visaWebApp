"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { FaPaperPlane } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumber = ({ setStep }) => {
  const [phone, setPhone] = useState("");
  console.log("🚀 ~ PhoneNumber ~ phone:", phone);
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Phone Number" subHeading=" " setStep={setStep} />
          <div className="flex justify-center mt-10">
            <PhoneInput
              defaultCountry="bd"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
        </div>
        <ContinueBtn />
      </section>
    </>
  );
};

export default PhoneNumber;
