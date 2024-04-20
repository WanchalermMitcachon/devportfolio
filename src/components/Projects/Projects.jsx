import React from "react";
import { ProjectData } from "./ProjectData";
import { Link, NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="mx-4 overflow-x-hidden">
      {/* Rings */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="530"
        height="129"
        style={{ transform: "translateX(30%) translateY(-50%)" }}
        className=""
      >
        <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
      <div className="flex justify-between text-white pb-9">
        <h1 className="text-3xl font-bold ">Projects</h1>
        <h4
          className="text-md font-semibold underline decoration-green-300	 
        underline-offset-[0.8rem] tracking-widest uppercase cursor-pointer"
        >
          Contact me
        </h4>
      </div>
      {ProjectData.map((item, idx) => {
        return (
          <div className="mb-14" key={idx}>
            <img
              src={item.thumbnail}
              alt={item.thumbnail}
              className="my-4"
            ></img>
            <h1 className="text-white text-2xl font-semibold uppercase">
              {item.title}
            </h1>
            <div className="flex my-3">
              {item.tech.map((el, idx) => {
                return (
                  <div className="mr-4" key={idx}>
                    {" "}
                    <h3 className="text-gray-300 text-xl font-semibold uppercase">
                      {el}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-6 text-white">
              <Link to={item.website} target="_blank">
                {" "}
                <h3 className="text-lg font-semibold tracking-widest underline decoration-green-400 underline-offset-[1rem] decoration-2 uppercase">
                  view project
                </h3>
              </Link>
              <Link to={item.github} target="_blank">
                <h3 className="text-lg font-semibold tracking-widest underline decoration-green-400 underline-offset-[1rem] decoration-2 uppercase">
                  View code
                </h3>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
