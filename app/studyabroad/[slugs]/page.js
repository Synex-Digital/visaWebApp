"use client";

import StudyAbroadBanner from "./components/StudyAbroadBanner";
import StudyAbroadContents from "./components/StudyAbroadContents";
import useFetch from "../../useFetch";
export default function view({ params }) {
  const { slugs } = params;

  const { data, loading, error } = useFetch(
    `https://45degreebd.synexdigital.com/api/country/view/${slugs}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // console.log(data.country.contents);

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
