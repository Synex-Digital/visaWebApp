"use client";
import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";

const EnglishProficiencyValidation = ({
  nextStep,
  prevStep,
  returnToLang,
  setStep,
  step,
}) => {
  const checkData = [
    {
      id: 1,
      cardInfo: "yes",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462007847.svg",
    },
    {
      id: 2,
      cardInfo: "no",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462043676.svg",
    },
  ];
  const [selectedCardId, setSelectedCardId] = useState("");
  const [selectedCardData, setSelectedCardData] = useState("");

  const handleClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
    if (checkData[cardId - 1]?.id === cardId) {
      setSelectedCardData([checkData[cardId - 1]]);
    }
  };

  useEffect(() => {
    if (selectedCardId) {
      console.log("Selected Card Data:", selectedCardData); // that will pass data in api or local storage
      if (selectedCardData[0].cardInfo === "yes") {
        setStep(step + 2);
      } else {
        nextStep();
      }
    }
  }, [selectedCardData]);
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            prevStep={prevStep}
            heading="Do you have a valid English Proficiency Certificate?"
            subHeading=""
            returnToLang={returnToLang}
          />
          <div className="flex justify-center gap-x-8 mt-10">
            {checkData?.map((item) => (
              <CheckCard
                key={item.id}
                id={item.id}
                cardInfo={item.cardInfo}
                imageLink={item.imageLink}
                isSelected={item.id === selectedCardId}
                onClick={() => handleClick(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EnglishProficiencyValidation;
