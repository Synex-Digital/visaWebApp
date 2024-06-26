import { FaGraduationCap } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Heading from "./components/Heading";
import FaqSection from "./components/FaqSection";
import MyImage from "./core/MyImage";
import MyButton from "./core/MyButton";
import StudyWithVisaSlides from "./components/StudyWithVisaSlides";
import { Metadata } from "next";

export const metadata = {
  title: {
    absolute: "45 Degree education consultancy",
    default: "45 Degree education consultancy",
    template: "45 Degree education consultancy",
  },
};

export default function Home() {
  return (
    <>
      <section className="h-fit md:h-dvh pt-32 md:pt-0">
        <div className="max-w-container h-full mx-auto px-2 flex justify-between">
          <div className="w-full flex flex-col justify-center">
            <h2 className="text-sm py-3 px-7 bg-[#EAE6FE] flex items-center gap-x-2.5 rounded-full w-fit">
              <span>
                <FaGraduationCap />
              </span>
              Scholarships For Bangladeshi Students
            </h2>
            <div className="w-full">
              <h1 className="text-primary mt-10 mb-4 md:mb-7 font-medium text-4xl">
                Elevate Student Experience With Visa Consulting
              </h1>
              <h2 className="text-ptag text-base md:text-lg">
                Maximize your student experience with Visa Consulting.
                Seamlessly navigate the visa process, unlocking the full
                potential of your academic journey.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-7 mt-10 md:mt-20 ">
              <MyButton link="#">
                Book a free consultation <BsArrowUpRight />
              </MyButton>
              <MyButton
                link="#"
                className="!bg-secondary hover:!bg-[#110353] hover:!text-white !text-primary"
              >
                Events <BsArrowUpRight />
              </MyButton>
            </div>
          </div>

          <div className="w-full hidden lg:flex h-fit ">
            <MyImage
              source="/assets/banner.webp"
              alt="banner.webp"
              className="w-5/6 ml-auto pt-20"
            />
          </div>
        </div>
      </section>

      <StudyWithVisaSlides></StudyWithVisaSlides>

      <section className="bg-[#faf5f5] pt-14 pb-20">
        <div className="max-w-container mx-auto px-2">
          <Heading
            firstword={"Our"}
            title={"Programs"}
            subtitle={"Unlocking the full potential of your academic journey"}
          />

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-14">
            <div className="bg-primary p-4 rounded-2xl">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Womanchecking.png"
                  alt="Womanchecking.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary p-4 rounded-2xl">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Womanchecking.png"
                  alt="Womanchecking.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary p-4 rounded-2xl">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Womanchecking.png"
                  alt="Womanchecking.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary p-4 rounded-2xl">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Womanchecking.png"
                  alt="Womanchecking.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary p-4 rounded-2xl">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Womanchecking.png"
                  alt="Womanchecking.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
          </div>
          {/* <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
              
            </div>
            <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/calendarapp.png"
                  alt="calendarapp.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Youngwomanandyoungmanuniversitygraduatecelebrate.png"
                  alt="Youngwomanandyoungmanuniversitygraduatecelebrate.png.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center">
                <MyImage
                  source="/assets/Onlineeducation.png"
                  alt="Onlineeducation.png"
                  className="w-auto"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div>
            <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
              <div className="w-full h-160px overflow-hidden mb-3 flex items-center justify-center rounded-[10px]">
                <MyImage
                  source="/assets/map.png"
                  alt="map.png"
                  className="object-cover"
                />
              </div>
              <h4 className="pl-2 text-white">Student Accommodation</h4>
              <Link href={"#"} className="text-xs pl-2 text-[#acb5b0]">
                Know more
              </Link>
            </div> */}
        </div>
      </section>

      <section className="bg-[#faf5f5] pt-14 pb-20">
        <div className="max-w-container mx-auto px-2">
          <Heading
            firstword={"OUR"}
            title={"EXPERIENCES"}
            subtitle={
              "Explore the best study destination in the world! Learn all about the countries top universities, scholarships, cost of living, post study work rights and more"
            }
          />
          <div className="mt-28 flex gap-4 flex-col md:flex-row justify-between">
            <div className="w-full md:w-[40%]">
              <MyImage
                source="/assets/experiences.png"
                alt="experiences.png"
                className="w-full rounded-20px shadow-lg"
              />
            </div>
            <div className="w-full md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-7 bg-primary rounded-20px hover:bg-secondary hover:bg-[#64FED8] text-white hover:text-primary ease-in-out duration-200 col-span-1">
                <span className="font-semibold text-4xl lg:text-5xl">30+</span>
                <h5 className="text-2xl lg:text-2xl my-3 lg:my-5">
                  Years of experience
                </h5>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
              <div className="p-7 bg-primary rounded-20px hover:bg-secondary hover:bg-[#64FED8] text-white hover:text-primary ease-in-out duration-200 col-span-1">
                <span className="font-semibold text-4xl lg:text-5xl">40+</span>
                <h5 className="text-2xl lg:text-2xl my-3 lg:my-5">
                  Happy Students
                </h5>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
              <div className="p-7 bg-primary rounded-20px hover:bg-secondary hover:bg-[#64FED8] text-white hover:text-primary ease-in-out duration-200 col-span-1">
                <span className="font-semibold text-4xl lg:text-5xl">Easy</span>
                <h5 className="text-2xl lg:text-2xl my-3 lg:my-5">Booking</h5>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
              <div className="p-7 bg-primary rounded-20px hover:bg-secondary hover:bg-[#64FED8] text-white hover:text-primary ease-in-out duration-200 col-span-1">
                <span className="font-semibold text-4xl lg:text-5xl">Best</span>
                <h5 className="text-2xl lg:text-2xl my-3 lg:my-5">
                  Student Guide
                </h5>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-container mx-auto px-2 text-white">
          <div className="flex flex-col md:flex-row gap-4 px-10 justify-between border-b-[#476354] border-b-8 pb-16">
            <h3 className="text-4xl font-medium">
              Let’s Explore the beauty
              <br /> of the world with us{" "}
            </h3>
            <p className="text-2xl w-full md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="mt-14 flex flex-col gap-6 md:flex-row  justify-between">
            <div className=" text-center w-full md:w-[20%]">
              <span className="font-semibold text-3xl md:text-5xl inline-block">
                24/7
              </span>
              <p className="font-semibold text-base md:text-2xl mt-1">
                Ready to support
              </p>
            </div>
            <div className=" text-center border-x w-full md:w-[30%]">
              <span className="font-semibol text-3xl md:text-5xl inline-block">
                24/7
              </span>
              <p className="font-semibold text-base md:text-2xl mt-1">
                Have special tickets
              </p>
            </div>
            <div className=" text-center w-full md:w-[20%]">
              <span className="font-semibold text-3xl md:text-5xl inline-block">
                24/7
              </span>
              <p className="font-semibold text-base md:text-2xl mt-1">
                Best guide for you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-container mx-auto px-2">
          <video
            className="w-full rounded-2xl"
            width="100%"
            controls
            preload="none"
            autoPlay
            muted
          >
            <source src="/assets/video/pro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <div className="max-w-container mx-auto px-2 mb-9">
          <Heading
            firstword={"FREQUENTLY"}
            title={"ASKED QUESTIONS"}
            subtitle={
              "Explore the best study destination in the world! Learn all about the countries top universities, scholarships, cost of living, post study work rights and more"
            }
          />
        </div>
        <FaqSection />
      </section>

      <section className=" py-32 px-2">
        <div className="max-w-container mx-auto py-16 px-4 bg-primary rounded-[20px]">
          <Heading
            ticlassName={"text-white"}
            subclassName={"text-white"}
            firstword={"Subscribe"}
            title={"to know about our new package"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet"
            }
          />
          <div className="text-center flex justify-center mt-10 md:mt-16">
            <div className="relative w-full md:w-2/5">
              <input
                placeholder="Enter your email address"
                className="w-full p-5 rounded-[20px]"
              />
              <button className="py-1.5 px-4 text-lg bg-primary absolute top-1/2 -translate-y-1/2 right-5 text-white rounded-xl">
                Submit
              </button>
            </div>
          </div>
          <p className="text-white text-lg text-center mt-10">
            Join 10,000+ Students in our community
          </p>
        </div>
      </section>
    </>
  );
}
