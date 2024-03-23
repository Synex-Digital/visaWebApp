"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

let arr = [
    {
        question: "What is a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
    {
        question: "How do I apply for a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
    {
        question: "What are the requirements for a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
    {
        question: "Can I work on a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // default state index will be 0 for always open first accordion

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index); // toggle the accordion
    };

    return (
        <div className="max-w-container mx-auto px-2 flex flex-col gap-y-5">
            {arr.map((item, index) => (
                <div className={`${openIndex === index ? 'bg-primary text-white rounded-20px py-7 px-9' : ''}`}>

                    {/* FAQ question button */}
                    <button
                        className={`${openIndex === index ? 'text-2xl' : 'bg-white py-4 px-8 w-full rounded-20px text-primary shadow'} flex justify-between items-center`}
                        onClick={() => toggleAnswer(index)}
                    >
                        {item.question}
                        <span className='text-primary'>
                            <FaChevronDown />
                        </span>
                    </button>

                    {/* FAQ Answer part */}
                    <div
                        className={`${openIndex === index ? "block py-3 px-5 bg-faqAnsActive mt-5" : "hidden bg-faqAnsNotActive text-primary py-4 px-8 text-lg my-3"} rounded-20px`}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}

            {/* <div className=" my-3">
                <button
                    className=" bg-white py-4 px-8 w-full flex justify-between items-center rounded-[20px] text-primary shadow"
                    onClick={() => setOpen(!open)}
                >
                    How do I apply for a student visa?{" "}
                    <span>
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`${open ? "block" : "hidden"
                        } bg-[#faf5f5] text-primary py-4 px-8 text-lg rounded-[20px] my-3`}
                >
                    Answer 1
                </div>
            </div>
            <div>
                <button
                    className=" bg-white py-4 px-8 w-full flex justify-between items-center rounded-[20px] text-primary shadow"
                    onClick={() => setOpen(!open)}
                >
                    How do I apply for a student visa?{" "}
                    <span>
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`${open ? "block" : "hidden"
                        } bg-[#faf5f5] text-primary py-4 px-8 text-lg rounded-[20px] my-3`}
                >
                    Answer 1
                </div>
            </div> */}
        </div>
    );
};

export default FaqSection;
