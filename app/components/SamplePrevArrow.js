import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const SamplePrevArrow = ({ style, onClick }) => {
    return (
        <span
            className=" absolute -top-16 right-20 p-2 border-2 group cursor-pointer hover:bg-primary border-primary rounded-full"
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <BsArrowLeft className="text-xl text-primary group-hover:text-white" />
        </span>
    );
};

export default SamplePrevArrow;
