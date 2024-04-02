import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { MdLabel } from "react-icons/md";

const AdditionRemark = ({ nextStep, prevStep, returnToLang }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");

  useEffect(() => {
    setAdditionalInput([textareaValue]);
  }, [textareaValue]);

  const handleSubmit = () => {
    setTextareaValue("");
    console.log(additionalInput);
    nextStep();
  };
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Addition Remark"
            subHeading=" "
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <div className="flex justify-center mt-8">
            <textarea
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              className="w-420px border border-Ash1 rounded-md p-3 focus:outline-0 focus:border-secondaryYellow1 text-base resize-none"
              placeholder="Study Gap, Extra Curricular Activities, etc"
              rows={5}
            />
          </div>
        </div>
        <ContinueBtn handleSubmit={handleSubmit} />
      </section>
    </>
  );
};

export default AdditionRemark;
