import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { FaPaperPlane } from "react-icons/fa6";

const Email = () => {
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Email Address" subHeading=" " />
          <InputField
            labelIcon={<FaPaperPlane />}
            type="email"
            placeholder="Please enter valid email"
            error=''
          />
        </div>
        <ContinueBtn />
      </section>
    </>
  );
};

export default Email;
