import React from "react";
import FormHeader from "./FormHeader";
import SuitableDestinationCard from "./SuitableDestinationCard";

const SuitableDestination = () => {
  const information = [
    {
      id: "01",
      cardHeading: "High Academic Profile with High Financial Affordability",
      academicRange:
        "( Academic Range: 60%-70%+ Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
    },
    {
      id: "02",
      cardHeading: "High Academic Profile with Low Financial Affordability",
      academicRange:
        "( Academic Range: 60%-70%+ Marks and Financial Range: 2,000 Euro - 6,000 Euro )",
    },
    {
      id: "03",
      cardHeading: "Average Academic Profile with High Financial Affordability",
      academicRange:
        "( Academic Range: 50%-60% Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
    },
    {
      id: "04",
      cardHeading:
        "Average Academic Profile with Average Financial Affordability",
      academicRange:
        "( Academic Range: 50%-60% Marks and Financial Range: 6,000 Euro - 12,000+ Euro )",
    },
    {
      id: "05",
      cardHeading: "Low Academic Profile with High Financial Affordability",
      academicRange:
        "( Academic Range: 40%-50% Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
    },
  ];
  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Assess Your Profile for Suitable Study Destination"
            subHeading=" "
          />
          <div className="w-full h-40 grid grid-cols-3 gap-10">
            {information?.map((item) => (
              <SuitableDestinationCard
                id={item.id}
                cardHeading={item.cardHeading}
                academicRange={item.academicRange}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuitableDestination;
