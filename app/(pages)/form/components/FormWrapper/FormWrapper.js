"use client";
import React, { useState, useEffect } from "react";
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
import BeConnected from "../BeConnected";
import AdditionRemark from "../AdditionRemark";
import ReviewingData from "../ReviewingData";
import LastConfirmation from "../LastConfirmation";
import ThankYou from "../ThankYou";

// save steps in local storage
const saveSteps = () => {
  const savedStep = localStorage.getItem("step");
  return savedStep ? JSON.parse(savedStep) : 1;
};
// save formData in local storage
const saveFormData = () => {
  const savedformData = localStorage.getItem("formData");
  return saveFormData
    ? JSON.parse(savedformData)
    : {
        language: "",
        suitableStudyDestination: "",
        englishProficiencyValidation: "",
        englishProficiencyNeed: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        academicQualification: "",
        subjectGroup: "",
        result: "",
        passingYear: "",
        pursueSubject: "",
        beConnected: "",
        additionRemark: "",
      };
};

const FormWrapper = () => {
  // states for store data
  const [formData, setFormData] = useState(saveFormData);
  const [step, setStep] = useState(saveSteps);

  // each time data changes the local storage will be updated
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  // functions for next, prev and return step
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const returnToLang = () => {
    setStep(1);
    localStorage.removeItem("formData");
  };

  // submit form in api and remove data from local storage
  const submitForm = () => {
    localStorage.removeItem("formData");
  };

  //  render steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectLanguage
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <SuitableDestination
            nextStep={nextStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <EnglishProficiencyValidation
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            setStep={setStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <EnglishProficiencyNeed
            prevStep={prevStep}
            nextStep={nextStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <CountriesMatches
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
          />
        ); // not completed.
      case 6:
        return (
          <FullName
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 7:
        return (
          <Email
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 8:
        return (
          <PhoneNumber
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 9:
        return (
          <AcademicQualification
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 10:
        return (
          <SubjectGroup
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 11:
        return (
          <Result
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 12:
        return (
          <PassingYear
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 13:
        return (
          <PursueSubject
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 14:
        return (
          <BeConnected
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 15:
        return (
          <AdditionRemark
            nextStep={nextStep}
            prevStep={prevStep}
            returnToLang={returnToLang}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 16:
        return <ReviewingData nextStep={nextStep} prevStep={prevStep} />;
      case 17:
        return (
          <LastConfirmation
            nextStep={nextStep}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        );
      case 18:
        return <ThankYou returnToLang={returnToLang} />;

      default:
        return <></>;
    }
  };
  return <>{renderStep()}</>;
};

export default FormWrapper;
