"use client";

import React from "react";
import Heading from "./Heading";
import MyImage from "./../core/MyImage";
import MyButton from "./../core/MyButton";
import ReactSlick from "./ReactSlick";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import useFetch from "./../useFetch";
import Link from "next/link";
const StudyWithVisaSlides = () => {
  const { data, loading, error } = useFetch(
    "https://45degreebd.synexdigital.com/api/country"
  );

  if (loading) {
    return (
      <section className="pt-20 pb-14">
        <div className="max-w-container mx-auto px-2">
          <Heading
            firstword={"STUDY"}
            title={"ABROAD WITH VISA"}
            subtitle={
              "Explore the best study destination in the world! Learn all about the countries top universities, scholarships, cost of living, post study work rights and more"
            }
          />
          <div className="mt-32 ">
            <ReactSlick className="w-full h-full ">
              <div className="relative !w-[96%]">
                <MyImage
                  source="/assets/study.png"
                  alt="study.png"
                  className="w-full rounded-20px"
                />
                <div className=" absolute w-full h-1/5 rounded-[20px] bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
              </div>
              <div className="relative !w-[96%]">
                <MyImage
                  source="/assets/study.png"
                  alt="study.png"
                  className="w-full rounded-20px"
                />
                <div className=" absolute w-full h-1/5 rounded-[20px] bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
              </div>
            </ReactSlick>
          </div>
          <div className="flex justify-center mt-14">
            <MyButton link="#">
              Explore More <BsArrowUpRight />
            </MyButton>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { country } = data;
  // console.log(country);

  return (
    <>
      <section className="pt-20 pb-14">
        <div className="max-w-container mx-auto px-2">
          <Heading
            firstword={"STUDY"}
            title={"ABROAD WITH VISA"}
            subtitle={
              "Explore the best study destination in the world! Learn all about the countries top universities, scholarships, cost of living, post study work rights and more"
            }
          />
          <div className="mt-24 md:mt-32">
            <ReactSlick className="w-full h-full ">
              {country?.map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-3xl overflow-hidden !w-[96%]"
                >
                  <MyImage
                    source={`https://45degreebd.synexdigital.com/uploads/country/${item.thumbnail}`}
                    alt="study.png"
                    className="w-full rounded-3xl"
                  />

                  <div className=" absolute w-full h-1/5 rounded-[20px] bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
                  <div className="absolute bottom-5 left-4 z-50 text-white">
                    <Link
                      href={`/studyabroad/${item.slugs}`}
                      className="text-xl font-medium"
                    >
                      {item.name}
                    </Link>
                    <p className="flex items-center gap-x-1 text-xs">
                      Learn more
                    </p>
                  </div>
                </div>
              ))}
            </ReactSlick>
          </div>
          <div className="flex justify-center mt-14">
            <MyButton link="#">
              Explore More <BsArrowUpRight />
            </MyButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyWithVisaSlides;
