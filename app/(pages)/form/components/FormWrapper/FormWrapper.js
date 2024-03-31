"use client";
import React, { useState } from "react";
import SelectLanguage from "./../SelectLanguage";
import SuitableDestination from "./../SuitableDestination";
import EnglishProficiencyValidation from "./../EnglishProficiencyValidation";
import EnglishProficiencyNeed from "./../EnglishProficiencyNeed";
import CountriesMatches from "./../CountriesMatches";
import FullName from "./../FullName";
import Email from "./../Email";
import PhoneNumber from "./../PhoneNumber";
import AcademicQualification from "./../AcademicQualification";
import SubjectGroup from "./../SubjectGroup";
import Result from "../Result";
import PassingYear from "../PassingYear";
import PursueSubject from "../PursueSubject";
import AdditionRemark from "../AdditionRemark";
import ReviewingData from "../ReviewingData";
import LastConfirmation from "../LastConfirmation";
import ThankYou from "../ThankYou";

const FormWrapper = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const returnToLang = () => {
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SelectLanguage nextStep={nextStep} />;
      case 2:
        return <SuitableDestination nextStep={nextStep} setStep={setStep}/>;
      case 3:
        return (
          <EnglishProficiencyValidation
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            setStep={setStep}
          />
        );
      case 4:
        return (
          <EnglishProficiencyNeed prevStep={prevStep} nextStep={nextStep} setStep={setStep}/>
        );
      case 5:
        return <CountriesMatches nextStep={nextStep} setStep={setStep}/>;
      case 6:
        return <FullName nextStep={nextStep} setStep={setStep}/>;
      case 7:
        return <Email nextStep={nextStep} setStep={setStep}/>;
      case 8:
        return <PhoneNumber nextStep={nextStep} setStep={setStep}/>;

      default:
        return (
          <>
          </>
        );
    }
  };
  return (
    <>
      {renderStep()}
      {/* <AcademicQualification /> */}
      {/* <SubjectGroup /> */}
      {/* <Result /> */}
      {/* <PassingYear /> */}
      {/* <PursueSubject /> */}
      {/* <BeConnected /> */}
      {/* <AdditionRemark /> */}
      {/* <ReviewingData /> */}
      {/* <LastConfirmation /> */}
      {/* <ThankYou /> */}
    </>
  );
};

export default FormWrapper;
