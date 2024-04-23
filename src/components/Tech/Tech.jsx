import React from "react";
import { TechData } from "./TechData";

export default function Tech() {
  console.log(TechData);
  return (
    <div className="my-9 md:grid md:grid-cols-[40%_40%] overflow-hidden lg:px-24 lg:grid-cols-[30%_30%_30%]">
      {TechData.map((item, idx) => {
        return (
          <div className="my-6 space-y-2 md:mx-8">
            <h1 className="text-white text-3xl font-bold text-center md:text-start">{item.skill}</h1>
            <h4 className="text-gray-300 font-bold text-center md:text-start">{item.year} Years Experience</h4>
          </div>
        );
      })}
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
        className="translate-x-[40%] translate-y-[20%] md:translate-x-[100%] md:translate-y-[-40%] 
        lg:translate-x-[60rem] lg:translate-y-[-40%]"
      >
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
    </div>
  );
}
