import React, { useState } from "react";
import FormHeader from "./FormHeader";
import CheckCard from "./CheckCard";
import ContinueBtn from "./ContinueBtn";

const BeConnected = ({
  nextStep,
  prevStep,
  returnToLang,
  formData,
  setFormData,
}) => {
  const socialInfo = [
    {
      id: 1,
      cardInfo: "whatsapp",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870663290.svg",
    },
    {
      id: 2,
      cardInfo: "mobile",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870687306.svg",
    },
    {
      id: 3,
      cardInfo: "email",
      imageLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870672345.svg",
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState("");

  const handleCardClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
    if (socialInfo[cardId - 1]?.id === cardId) {
      setSelectedCardData(socialInfo[cardId - 1]);
    }
  };

  const handleSubmit = () => {
    setFormData({ ...formData, beConnected: selectedCardData });
    nextStep();
  };
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="How would you prefer to be contacted?"
            subHeading=""
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <div className="flex justify-center gap-x-8 mt-8">
            {socialInfo?.map((item) => (
              <CheckCard
                key={item.id}
                id={item.id}
                cardInfo={item.cardInfo}
                imageLink={item.imageLink}
                isSelected={item.id === selectedCardId}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
          <ContinueBtn handleSubmit={handleSubmit} />
        </div>
      </section>
    </>
  );
};

export default BeConnected;
