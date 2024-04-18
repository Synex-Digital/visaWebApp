import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";

const EnglishProficiencyNeed = ({
  nextStep,
  prevStep,
  returnToLang,
  formData,
  setFormData,
}) => {
  const checkData = [
    {
      id: 1,
      cardInfo: "no",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462043676.svg",
    },
    {
      id: 2,
      cardInfo: "yes",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1688462007847.svg",
    },
  ];
  const [selectedCardId, setSelectedCardId] = useState("");
  const [selectedCardData, setSelectedCardData] = useState("");

  const handleClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
    if (checkData[cardId - 1]?.id === cardId) {
      setSelectedCardData(checkData[cardId - 1]);
    }
  };

  useEffect(() => {
    if (selectedCardId) {
      setFormData({
        ...formData,
        englishProficiencyNeed: selectedCardData,
      });
      nextStep();
    }
  }, [selectedCardData]);
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            prevStep={prevStep}
            heading="Are you willing to take the English Proficiency Test?"
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

export default EnglishProficiencyNeed;
