import React from "react";
import { TechData } from "./TechData";

export default function Tech() {
  console.log(TechData);
  return (
    <div className="my-9">
      {TechData.map((item, idx) => {
        return (
          <div className="my-6 space-y-2">
            <h1 className="text-white text-3xl font-bold text-center">{item.skill}</h1>
            <h4 className="text-gray-300 font-bold text-center">{item.year} Years Experience</h4>
          </div>
        );
      })}
    </div>
  );
}
