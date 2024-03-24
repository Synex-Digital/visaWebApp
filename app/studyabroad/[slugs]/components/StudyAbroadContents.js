import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";

const StudyAbroadContents = ({ content }) => {
  return (
    <>
      <div className="w-full py-8">
        {/* <div className="container mx-auto px-2 grid grid-cols-9 gap-14"> */}
        <div className="max-w-container mx-auto px-2 flex flex-col md:flex-row gap-8">
          <SideBar content={content} />
          <Content content={content} />
        </div>
      </div>
    </>
  );
};

export default StudyAbroadContents;
