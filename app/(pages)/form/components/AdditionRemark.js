import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import { MdLabel } from "react-icons/md";

const AdditionRemark = () => {
  return (
    <div>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Addition Remark" subHeading=" " />
          <div className="flex justify-center mt-8">
            <textarea
              // value={value}
              className="w-420px border border-Ash1 rounded-md p-3 focus:outline-0 focus:border-secondaryYellow1 text-base resize-none"
              placeholder="Study Gap, Extra Curricular Activities, etc"
              rows={5}
            />
          </div>
        </div>
        <ContinueBtn />
      </section>
    </div>
  );
};

export default AdditionRemark;
