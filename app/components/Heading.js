import React from "react";

const Heading = ({ firstword, title, subtitle, ticlassName, subclassName }) => {
    return (
        <div className="flex flex-col items-center">
            <h3
                className={`text-primary text-4xl font-medium text-center ${ticlassName}`}
            >
                <span className="text-secondary">{firstword}</span> {title}
            </h3>
            <p
                className={`text-lg text-ptag text-center mt-6 w-1/2 ${subclassName}`}
            >
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;
