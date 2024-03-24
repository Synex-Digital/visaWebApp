import React from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";
import ContinueBtn from "./ContinueBtn";

const BeConnected = () => {
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="How would you prefer to be contacted?"
            subHeading=""
          />
          <div className="flex justify-center gap-x-8 mt-8">
            <CheckCard
              cardInfo="whatsapp"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870663290.svg"
            />
            <CheckCard
              cardInfo="mobile"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870687306.svg"
            />
            <CheckCard
              cardInfo="email"
              imageLink="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870672345.svg"
            />
          </div>
        <ContinueBtn />
        </div>
      </section>
    </>
  )
}

export default BeConnected