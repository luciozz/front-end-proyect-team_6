import React from "react";
import "./HomeSections.css";

const HomeSections = ({ svg, txt, change }) => {
  return (
    <div className="sectionContainer grid grid-cols-1 text-center items-center gap-y-8 gap-x-8 md:grid-cols-2 py-12 my-5 container mx-auto border-orange-600 border dark:bg-gray-800 mt-5 rounded-lg dark:bg-gradient-to-r dark:from-gray-900 dark:hover:bg-orange-600 transition ease-in-out hover:scale-95 hover:shadow-[0_8px_8px_1px_rgba(0,0,0,0.5)] duration-500">
      <div className={`relative ${change ? "md:order-2" : "md:order-1"}`}>
        <p className={`text-5xl md:text-6xl font-bold md:order-3 dark:text-slate-100`}>
          {txt}
        </p>
      </div>
      <div className={`container-svg ${change ? "md:order-1" : "md:order-2"}`}>{svg}</div>
    </div>
  );
};

export default HomeSections;
