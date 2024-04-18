import React, { useState } from "react";
import MyImage from "../../../core/MyImage";
import ReviewCard from "./ReviewCard";

const ReviewingData = ({ prevStep, nextStep }) => {
  const [isEditable, setIsEditable] = useState(false);

  const localStorageData = JSON.parse(localStorage.getItem("formData"));
  const handleSubmit = () => {
    nextStep();
  };
  return (
    <>
      <section className="pb-20">
        <div className="max-w-container mx-auto px-2">
          <div className="">
            {/* logo */}
            <div className="pt-6">
              <MyImage
                source="/assets/Logos/PrimaryLogoNavyBlue.png"
                alt="PrimaryLogoNavyBlue.png"
                className="w-36 mx-auto"
              />
            </div>
            {/* heading */}
            <div className="w-full">
              <h2 className="text-4xl font-bold leading-[140%] text-Black text-center capitalize my-5">
                Please check before submitting
              </h2>
              <p className="text-xl font-semibold text-black opacity-60 text-center mt-2 capitalize px-5">
                Please note that you will not be able to change your answers
                after clicking the submit button. We would like to recommend you
                to check your answers before clicking the submit button.
              </p>
            </div>
            {/* cards */}
            <div className="mt-10 grid grid-cols-3 gap-7">
              <ReviewCard
                isEditable={isEditable}
                header="Assess Your Profile for Suitable Study Destination"
                icon={localStorageData.suitableStudyDestination.icon}
                iconSize="w-10"
                cardInfo={localStorageData.suitableStudyDestination.cardHeading}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Do you have a valid English Proficiency Certificate?"
                icon={localStorageData.englishProficiencyValidation.imageLink}
                iconSize="w-10"
                cardInfo={
                  localStorageData.englishProficiencyValidation.cardInfo
                }
              />
              {localStorageData.englishProficiencyNeed ? (
                <ReviewCard
                  isEditable={isEditable}
                  header="Are you willing to take the English Proficiency Test?"
                  icon={localStorageData.englishProficiencyNeed.imageLink}
                  iconSize="w-10"
                  cardInfo={localStorageData.englishProficiencyNeed.cardInfo}
                />
              ) : (
                <></>
              )}
              <ReviewCard
                isEditable={isEditable}
                header="The Following Countries Matches Your Category. Select the Country of Your Preference"
                icon={''}
                iconSize="w-10"
                cardInfo={''}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Full Name"
                icon={"https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870836493.svg"}
                iconSize="w-10"
                cardInfo={localStorageData.fullName}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Email Address"
                icon={"https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870227501.svg"}
                iconSize="w-10"
                className="!lowercase"
                cardInfo={localStorageData.email}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Phone Number"
                icon={"https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870186004.svg"}
                iconSize="w-10"
                cardInfo={localStorageData.phoneNumber}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Your Last Academic Qualification"
                icon={localStorageData.academicQualification.imgLink}
                iconSize="w-10"
                cardInfo={localStorageData.academicQualification.course}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Major"
                icon={localStorageData.academicQualification.imgLink}
                iconSize="w-10"
                cardInfo={localStorageData.subjectGroup}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Result"
                icon="/assets/gpa.png"
                iconSize="w-10"
                cardInfo={localStorageData.results}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Passing Year"
                icon="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870885148.svg"
                iconSize="w-10"
                cardInfo={localStorageData.passingYear}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Which subject do you want to pursue for your Bachelor/Masters? "
                icon="https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870885148.svg"
                iconSize="w-10"
                cardInfo={localStorageData.pursueSubject}
              />
              <ReviewCard
                isEditable={isEditable}
                header="How would you prefer to be contacted?"
                icon={localStorageData.beConnected.imageLink}
                iconSize="w-10"
                cardInfo={localStorageData.beConnected.cardInfo}
              />
              <ReviewCard
                isEditable={isEditable}
                header="Additional Remarks"
                icon="/assets/remarks.png"
                iconSize="w-10"
                cardInfo={localStorageData.additionRemark
                }
              />
            </div>
            {/* buttons */}
            <div className="flex justify-center gap-6 mt-28">
              <button
                onClick={prevStep}
                className="w-40 py-3 border border-primaryGreen1 bg-transparent text-xl font-semibold text-Black duration-150 hover:border-secondaryYellow1 hover:text-secondaryYellow1"
                type="button"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-40 py-3 border border-primaryGreen1 bg-primaryGreen1 text-xl font-semibold text-white duration-150 opacity-90 hover:opacity-100"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewingData;
