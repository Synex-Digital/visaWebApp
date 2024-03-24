import Link from "next/link";
import React from "react";

const SideBar = ({ content }) => {
  console.log(content);
  return (
    <>
      <div className="w-full md:w-[30%] h-fit  border bg-[#FFF9F9] rounded-20px p-4 sticky top-[4.4rem] md:top-24 overflow-scroll">
        <div className="font-light text-primary text-base flex flex-row md:flex-col gap-1 w-max md:w-full">
          {content.map((item, index) => (
            <>
              <Link
                href={`#section-${index}`}
                className="font-medium text-primary text-base bg-[#ECE9FD] px-3.5 py-1.5 rounded-xl mb-1"
              >
                {item.title}
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
