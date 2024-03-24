import React from "react";
import FormHeader from "./FormHeader";
import CountriesMatchCard from "./CountriesMatchCard";
import { FaArrowRight } from "react-icons/fa6";

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
                <CountriesMatchCard key={item.id} countryName={item.countryName} flag={item.flag}/>
              ))
            }
          </div>
          <div className="bg-white shadow-md py-3 fixed bottom-0 left-0 w-full flex justify-center duration-300">
            <button className="px-5 py-2 bg-Ash3 cursor-not-allowed font-medium text-Black flex items-center hover:text-white duration-150 rounded-md" type="button" disabled>Continue <FaArrowRight className="ml-2"/></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountriesMatches;
