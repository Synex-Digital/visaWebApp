"use client";
import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import CourseName from "./CourseName";

const AcademicQualification = ({ nextStep, prevStep, returnToLang }) => {
  const courses = [
    {
      id: "1",
      course: "Master's Degree",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870561347.svg",
    },
    {
      id: "2",
      course: "Post Graduate Diploma",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644441815.svg",
    },
    {
      id: "3",
      course: "Bachelor's Degree",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870579856.svg",
    },
    {
      id: "4",
      course: "Diploma",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644441815.svg",
    },
    {
      id: "5",
      course: "HSC/ A-Level",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870567770.svg",
    },
    {
      id: "6",
      course: "Foundation ",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644414336.svg",
    },
    {
      id: "7",
      course: "SSC/ O-Level",
      imgLink:
        "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870574024.svg",
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState();

  const handleCardClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
    if (courses[cardId - 1]?.id === cardId) {
      setSelectedCardData([courses[cardId - 1]]);
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
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Your Last Academic Qualification"
            subHeading=""
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
          <div className="grid grid-cols-3 gap-10 mt-10">
            {courses?.map((item) => (
              <CourseName
                key={item.id}
                id={item.id}
                course={item.course}
                imgLink={item.imgLink}
                isSelected={item.id === selectedCardId}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicQualification;
