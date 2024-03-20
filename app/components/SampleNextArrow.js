import React from "react";
import { BsArrowRight } from "react-icons/bs";
const SampleNextArrow = ({ style, onClick }) => {
    return (
        <span
            className=" absolute -top-16 right-5 p-2 border-2 group cursor-pointer hover:bg-primary border-primary rounded-full "
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <BsArrowRight className="text-xl text-primary group-hover:text-white" />
        </span>
    );
};

export default SampleNextArrow;
