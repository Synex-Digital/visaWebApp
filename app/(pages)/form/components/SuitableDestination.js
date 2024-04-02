"use client";
import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import SuitableDestinationCard from "./SuitableDestinationCard";

const SuitableDestination = ({ nextStep, returnToLang }) => {
  const information = {
    header: "Assess Your Profile for Suitable Study Destination",
    destinations: [
      {
        id: "1",
        cardHeading: "High Academic Profile with High Financial Affordability",
        academicRange:
          "( Academic Range: 60%-70%+ Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
        icon: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623300944.svg",
      },
      {
        id: "2",
        cardHeading: "High Academic Profile with Low Financial Affordability",
        academicRange:
          "( Academic Range: 60%-70%+ Marks and Financial Range: 2,000 Euro - 6,000 Euro )",
        icon: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623314290.svg",
      },
      {
        id: "3",
        cardHeading:
          "Average Academic Profile with High Financial Affordability",
        academicRange:
          "( Academic Range: 50%-60% Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
        icon: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623323930.svg",
      },
      {
        id: "4",
        cardHeading:
          "Average Academic Profile with Average Financial Affordability",
        academicRange:
          "( Academic Range: 50%-60% Marks and Financial Range: 6,000 Euro - 12,000+ Euro )",
        icon: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623336864.svg",
      },
      {
        id: "5",
        cardHeading: "Low Academic Profile with High Financial Affordability",
        academicRange:
          "( Academic Range: 40%-50% Marks and Financial Range: 12,000 Euro - 20,000+ Euro )",
        icon: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685623347819.svg",
      },
    ],
  };
  const destinationInfo = information.destinations;

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCardData("");
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
    if (destinationInfo[cardId - 1]?.id === cardId) {
      setSelectedCardData([destinationInfo[cardId - 1]]);
    }
  };
  useEffect(() => {
    if (selectedCardId) {
      console.log("Selected Card Data:", selectedCardData); // that will pass data in api or local storage
      nextStep()
    }
  }, [selectedCardData]);

  return (
    <>
      <section className="w-full h-dvh">
        <div className="max-w-container mx-auto px-2">
          <FormHeader heading={information.header} subHeading=" " returnToLang={returnToLang} />
          <div className="w-full h-40 grid grid-cols-3 gap-10">
            {destinationInfo?.map((item) => (
              <SuitableDestinationCard
                key={item.id}
                id={item.id}
                cardHeading={item.cardHeading}
                academicRange={item.academicRange}
                icon={item.icon}
                isSelected={item.id === selectedCardId}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuitableDestination;
