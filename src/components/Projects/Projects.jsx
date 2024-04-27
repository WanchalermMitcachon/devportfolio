import React from "react";
import { ProjectData } from "./ProjectData";
import { Link, NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="mx-4 overflow-x-hidden mt-20 md:mx-6 lg:mx-24">
      {/* Rings */}

      <div className="flex justify-between text-white pb-9">
        <h1 className="text-[40px] font-bold md:text-6xl ">Projects</h1>
        <h4
          className="text-md cursor-pointer font-bold underline decoration-green-300	 
        underline-offset-[0.8rem] tracking-widest uppercase cursor-pointer mt-2 hover:text-green-300 md:mt-4"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact me
        </h4>
      </div>
      <div className="md:grid md:grid-cols-[1fr,1fr] md:space-x-6">
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
                  <h3 className=" font-bold tracking-widest underline decoration-green-400 underline-offset-[1rem] decoration-2 uppercase">
                    view project
                  </h3>
                </Link>
                <Link to={item.github} target="_blank">
                  <h3 className=" font-bold tracking-widest underline decoration-green-400 underline-offset-[1rem] decoration-2 uppercase">
                    View code
                  </h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
