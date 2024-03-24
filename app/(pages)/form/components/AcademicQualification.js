import React from "react";
import FormHeader from "./FormHeader";
import CourseName from "./CourseName";

const AcademicQualification = () => {
  const courses = [
    {
      id: "1",
      course: "Master's Degree",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870561347.svg",
    },
    {
      id: "2",
      course: "Post Graduate Diploma",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644441815.svg",
    },
    {
      id: "3",
      course: "Bachelor's Degree",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870579856.svg",
    },
    {
      id: "4",
      course: "Diploma",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644441815.svg",
    },
    {
      id: "5",
      course: "HSC/ A-Level",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870567770.svg",
    },
    {
      id: "6",
      course: "Foundation ",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1686644414336.svg",
    },
    {
      id: "7",
      course: "SSC/ O-Level",
      imgLink: "https://unispaces.sgp1.digitaloceanspaces.com/vts-campaign/1685870574024.svg",
    },
  ];
  return (
    <>
      <section className="h-dvh w-full">
        <div className="max-w-container mx-auto px-2">
          <FormHeader
            heading="Your Last Academic Qualification"
            subHeading=""
          />
          <div className="grid grid-cols-3 gap-10 mt-10">
            {courses?.map((item) => (
              <CourseName
                id={item.id}
                course={item.course}
                imgLink={item.imgLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicQualification;
