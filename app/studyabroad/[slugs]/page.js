"use client";

import StudyAbroadBanner from "./components/StudyAbroadBanner";
import StudyAbroadContents from "./components/StudyAbroadContents";
import useFetch from "../../useFetch";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function view({ params }) {
  const { slugs } = params;

  const { data, loading, error } = useFetch(
    `https://45degreebd.synexdigital.com/api/country/view/${slugs}`
  );

  if (loading) {
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <ScaleLoader color="#110353" />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <StudyAbroadBanner
        title={data.country.title}
        description={data.country.description}
      />
      <StudyAbroadContents content={data.country.contents} />
    </>
  );
}
