import React from "react";
import FormHeader from "./FormHeader";
import ContinueBtn from "./ContinueBtn";

const PassingYear = () => {
  const currentYear = new Date().getFullYear();
  const startingYear = 2015;
  const lastYear = currentYear - 1;

  const passingYears = Array.from(
    { length: lastYear - startingYear + 1 },
    (_, index) => startingYear + index
  );
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading="Passing Year" subHeading=" " />
          <div className="flex justify-center mt-10">
            <div className="">
              <select
                // value={selectedYear}
                className="w-420px border border-Ash1 rounded-md px-4 py-2 focus:outline-none focus:border-secondaryYellow1 text-base"
              >
                {passingYears.map((year) => (
                  <option className="" key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <ContinueBtn />
      </section>
    </>
  );
};

export default PassingYear;
