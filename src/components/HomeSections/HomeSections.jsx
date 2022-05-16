import React from "react";

const HomeSections = ({ svg, txt, change }) => {
  return (    
    <div className="grid grid-cols-1 text-center items-center gap-y-8 gap-x-8 md:grid-cols-2 py-12 container mx-auto ">
      <div className={`relative ${change ? "md:order-2" : "md:order-1"}`}>
        <p className={`text-5xl md:text-6xl font-bold md:order-3 dark:text-slate-100`}>{txt}</p>
      </div>
      {svg}
    </div>
  );
};

export default HomeSections;
