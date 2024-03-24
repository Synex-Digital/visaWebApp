import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import ContinueBtn from "./ContinueBtn";
import MyImage from "../../../core/MyImage";

const SubjectGroup = () => {
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Major" subHeading=" " />
          <InputField
            labelIcon={<MyImage source='https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870561347.svg' alt='icon' className='w-6'/>}
            type="text"
            placeholder="Example: BBA - Marketing, Civil Engineering, Social Science, etc"
            error=''
          />
        </div>
        <ContinueBtn />
      </section>
    </>
  )
}

export default SubjectGroup