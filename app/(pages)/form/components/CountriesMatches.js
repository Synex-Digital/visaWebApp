"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import CountriesMatchCard from "./CountriesMatchCard";
import ContinueBtn from "./ContinueBtn";

const CountriesMatches = ({ nextStep, setStep }) => {
  const countries = [
    {
      id: "1",
      countryName: "United States",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682579132479.png",
    },
    {
      id: "2",
      countryName: "Greece",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682573595896.png",
    },
    {
      id: "3",
      countryName: "Tunisia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682579291615.png",
    },

    {
      id: "4",
      countryName: "Thailand",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682578143159.png",
    },
    {
      id: "5",
      countryName: "South Africa",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682577694482.png",
    },
    {
      id: "6",
      countryName: "Slovenia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682577577106.png",
    },
    {
      id: "7",
      countryName: "Russia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682577026029.png",
    },
    {
      id: "8",
      countryName: "Romania",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1681715044995.png",
    },
    {
      id: "9",
      countryName: "Mauritius",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574890719.png",
    },
    {
      id: "10",
      countryName: "Nigeria",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682575650271.png",
    },
    {
      id: "11",
      countryName: "Macedonia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574638007.png",
    },
    {
      id: "12",
      countryName: "Malta",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574834396.png",
    },
    {
      id: "13",
      countryName: "Jamaica",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574125921.png",
    },
    {
      id: "14",
      countryName: "Kazakhstan",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574198790.png",
    },
    {
      id: "15",
      countryName: "Kosovo",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682574269598.png",
    },
    {
      id: "16",
      countryName: "Ghana",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682573562671.png",
    },
    {
      id: "17",
      countryName: "India",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1681715061776.png",
    },
    {
      id: "18",
      countryName: "Indonesia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682573963964.png",
    },
    {
      id: "19",
      countryName: "Azerbaijan",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682571750595.png",
    },
    {
      id: "20",
      countryName: "Croatia",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682572923659.png",
    },
    {
      id: "21",
      countryName: "Bulgaria",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682572529047.png",
    },
    {
      id: "22",
      countryName: "Czech Republic",
      flag: "https://unispaces.sgp1.digitaloceanspaces.com/nebula/1682578346198.png",
    },
  ];
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (card) => {
    console.log(card);
  };

  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="The Following Countries Matches Your Category. Select the Country of Your Preference"
            subHeading="(You can select up to 3 countries)"
            setStep={setStep}
          />
          <div className="grid grid-cols-3 gap-10 pb-28">
            {countries?.map((item) => (
              <CountriesMatchCard
                key={item.id}
                id={item.id}
                countryName={item.countryName}
                flag={item.flag}
                onClick={handleCardClick}
              />
            ))}
          </div>
          <ContinueBtn
            nextStep={nextStep}
            isBtnDisabled={isBtnDisabled}
            setIsBtnDisabled={setIsBtnDisabled}
          />
        </div>
      </section>
    </>
  );
};

export default CountriesMatches;
