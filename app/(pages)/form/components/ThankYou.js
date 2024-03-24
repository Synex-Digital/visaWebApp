import React from "react";
import MyImage from "../../../core/MyImage";
import Link from "next/link";

const ThankYou = () => {
  return (
    <>
      <section className="h-dvh w-full bg-white">
        <div className="max-w-container mx-auto px-2">
          <div className="">
            <MyImage
              source="/assets/Logos/PrimaryLogoNavyBlue.png"
              alt="PrimaryLogoNavyBlue.png"
              className="w-36 mx-auto"
            />
          </div>
          <div className="flex justify-between items-center">
            <MyImage
              source="/assets/thankyou.jpg"
              alt="thankyou.jpg"
              className="w-[500px]"
            />
            <h3 className="w-[500px] text-3xl text-Black font-semibold text-center leading-10">
              Thank you for your participation! One of our consultants will
              contact you soon. In the meantime please feel free to browse our
              website:
              <br />{" "}
              <Link className="text-primaryGreen1" href="#">
                45 Degree Education Consultancy
              </Link>{" "}
            </h3>
          </div>
          <div className="flex justify-center">
            <Link href="/" className="px-6 py-3 bg-blue-800 rounded-md font-semibold text-white">
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
