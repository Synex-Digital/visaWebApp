"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

let arr = [
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "What qualification is required to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
   {
      question: "How much does it cost to study in Canada?",
      answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
   },
];
const FAQ = () => {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index); // toggle the accordion
   };
   return (
      <>
         <h3 className='text-28px font-medium text-primary mb-11'>What are the <span className='text-secondary'>FREQUENTLY</span> ASKED QUESTIONS</h3>

         <div className='flex flex-col gap-y-5'>
            {arr.map((item, index) => (
               <div key={index} className={`${openIndex === index ? 'bg-primary text-white rounded-20px py-6 px-7' : ''}`}>

                  {/* FAQ question button */}
                  <button
                     className={`${openIndex === index ? 'text-2xl' : 'bg-white py-2.5 px-8 w-full rounded-20px text-primary shadow'} flex justify-between items-center`}
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
         </div>
      </>
   )
}

export default FAQ