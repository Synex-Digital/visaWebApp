import React from "react";

const Heading = ({ firstword, title, subtitle, ticlassName, subclassName }) => {
  return (
    <div className="flex flex-col items-center">
      <h3
        className={`text-primary text-3xl md:text-4xl font-medium text-center ${ticlassName}`}
      >
        <span className="text-secondary">{firstword}</span> {title}
      </h3>
      <p
        className={`text-base md:text-lg text-ptag text-center mt-6 w-full md:w-1/2 ${subclassName}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
