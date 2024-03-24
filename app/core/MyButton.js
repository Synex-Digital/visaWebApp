import Link from "next/link";
import React from "react";

const MyButton = ({ children, className, link }) => {
  return (
    <>
      <Link
        href={link}
        className={`${className} bg-primary hover:bg-[#120353d5] duration-150 text-white text-lg font-medium px-7 py-3 rounded-xl flex items-center gap-x-3`}
      >
        {children}
      </Link>
    </>
  );
};

export default MyButton;
