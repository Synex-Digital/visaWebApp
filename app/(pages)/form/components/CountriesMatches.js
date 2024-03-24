import React from "react";
import FormHeader from "./FormHeader";
import CountriesMatchCard from "./CountriesMatchCard";
import ContinueBtn from "./ContinueBtn";

const CountriesMatches = () => {
  const countries = [
    {
      id: '1',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '2',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '3',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '4',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '5',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '6',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '7',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '8',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '9',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '10',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '11',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
    {
      id: '12',
      countryName: 'United Kingdom',
      flag: '/assets/flags/uk-flag.webp'
    },
  ]
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="The Following Countries Matches Your Category. Select the Country of Your Preference"
            subHeading="(You can select up to 3 countries)"
          />
          <div className="grid grid-cols-3 gap-10 pb-28">
            {
              countries?.map((item)=>(
                <CountriesMatchCard id={item.id} countryName={item.countryName} flag={item.flag}/>
              ))
            }
          </div>
          <ContinueBtn />
        </div>
      </section>
    </>
  );
};

export default CountriesMatches;
