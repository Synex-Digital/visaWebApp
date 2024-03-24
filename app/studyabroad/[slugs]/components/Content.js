import React from "react";
import MyButton from "../../../core/MyButton";
import FAQ from "./FAQ";
import sanitizeHtml from "sanitize-html";
import "./summernote.css";

const Content = ({ content }) => {
  return (
    <>
      <div className="w-full  px-4 md:px-6">
        <section id="information">
          {content.map((item, index) => (
            <section id={`section-${index}`} key={index}>
              {/* Render HTML content */}
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(item.content),
                }}
              />
            </section>
          ))}
        </section>
        <section id="faq" className="pt-72px">
          <FAQ />
        </section>
      </div>
    </>
  );
};

export default Content;
