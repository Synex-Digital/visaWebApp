import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { MdLabel } from "react-icons/md";

const FullName = () => {
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Full Name" subHeading=" " />
          <InputField labelIcon={<MdLabel />} placeholder='Please enter your name as per your passport1'/>
        </div>
        <ContinueBtn />
      </section>
    </>
  );
};

export default FullName;
