import React from "react";

function Contact() {
  return (
    <div className="px-3 py-14 bg-gray-800">
      {/* Content */}
      <div className="space-y-8 md:mx-[12rem]">
        <h1 className="text-white text-center font-bold text-4xl ">Contact</h1>
        <p className="text-gray-300 text-center font-semibold">
          I would love to hear about your project and how I could help. Please
          fill in the from, and I'll get back to you as soon as possible.
        </p>
      </div>
      {/* Form */}
      <div className="mt-14 space-y-12 md:mx-[12rem]">
        <div className="">
          <input
            type="text"
            className="border-0 bg-transparent placeholder-gray-400 
          placeholder-opacity-50 text-white focus:outline-none mx-6"
            placeholder="NAME"
          />
          <hr className=" mt-4"></hr>
        </div>
        <div>
          <input
            type="text"
            className="border-0 bg-transparent placeholder-gray-400 
          placeholder-opacity-50 text-white focus:outline-none mx-6"
            placeholder="EMAIL"
          />
          <hr className=" mt-4"></hr>
        </div>
        <div>
          <textarea
            type="text"
            className="border-0 bg-transparent placeholder-gray-400 
          placeholder-opacity-50 text-white focus:outline-none mx-6 w-[80%] pr-4 pb-12
          "
            placeholder="MESSAGE"
          />
          <hr className=" mt-2"></hr>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="530"
            height="129"
            className="translate-x-[-18rem] translate-y-[-3rem] md:translate-x-[-32rem] md:translate-y-[1rem]"
          >
            <g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25">
              <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
            </g>
          </svg>
          <div className="mt-[-5rem] mb-8">
            <h1
              className="text-white uppercase text-end underline decoration-green-300	 
        underline-offset-[0.8rem] tracking-widest font-bold decoration-2 cursor-pointer "
            >
              Send Message
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
