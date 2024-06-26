import React from "react";
import profileMobile from "../../assets/images/image-profile-mobile.webp";
import profileTablet from "../../assets/images/image-profile-tablet.webp";
import profileDesktop from "../../assets/images/image-profile-desktop.webp";

function Profile() {
  // ตรวจสอบขนาดของหน้าจอ
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isTablet = window.matchMedia("(max-width: 1024px)").matches;
  const isDesktop = window.matchMedia("(min-width: 1281px)").matches; // เปลี่ยนเป็น min-width สำหรับเงื่อนไขของ Desktop

  // กำหนด src ของรูปภาพโปรไฟล์ตามเงื่อนไข
  const profilePicSrc = isMobile
    ? profileMobile
    : isTablet
    ? profileTablet
    : isDesktop
    ? profileDesktop // เพิ่มเงื่อนไขสำหรับ Desktop
    : profileMobile; // เลือกรูปโปรไฟล์โดย default

  return (
    <div className=" w-full overflow-x-hidden md:overflow-hidden md:relative md:h-[30rem]  ">
      {/* rings and circle+profile box */}
      <div className="grid grid-cols-[30%_70%]  max-h-[15rem] md:grid-cols-[55%_45%] ">
        {/* Rings */}
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="530"
            height="129"
            className=" mt-16 translate-x-[-60%] translate-y-[40%] 
            md:mt-0 md:translate-x-[-55%] md:translate-y-[30%] lg:translate-y-[70%]"
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
        {/* profile box and circle */}
        <div className="flex justify-center md:justify-end md:relative md:overflow-x-hidden md:h-full lg:overflow-x-visible lg:mx-24">
          {/* profile box and profilse pic */}
          <div className="flex flex-col items-center bg-gray-900  w-[174px]  md:w-full">
            {/* profile box */}
            <div className="flex flex-col z-50">
              {" "}
              <h1 className=" text-white font-bold text-2xl text-center mb-8 pt-6 md:hidden ">
                adamakeyes
              </h1>
              {/* Social media */}
              <div
                className="flex space-x-3 ml-1  mb-[-8rem]  md:ml-0  
              md:absolute md:top-10 md:right-[1rem] md:space-x-6 md:mb-0 lg:right-[6%] "
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23">
                  <path
                    fill="#FFF"
                    d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                  <path
                    fill="#FFF"
                    d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
                  />
                </svg>
              </div>
            </div>
            {/* Profile pic */}
            <img
              src={profilePicSrc}
              alt="xx"
              className="h-[300px]  mt-14 w-full z-0 md:h-[500px] object-fill md:object-fill md:mt-0 "
            />
          </div>
          {/* Circle */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="129"
            className="translate-x-8 overflow-x-hidden translate-y-[230px] md:absolute md:right-[-2rem] md:top-11 lg:right-[90%] lg:top-0 "
          >
            <circle
              cx="830.5"
              cy="585.5"
              r="64"
              fill="none"
              stroke="#FFF"
              transform="translate(-766 -521)"
            />
          </svg>
        </div>
      </div>
      {/* content */}
      <div className="px-2 pt-28 mb-8  md:pt-0 md:absolute md:top-0 md:left-0 md:w-[60%] md:mx-4 lg:mx-24 ">
        <div className="md:flex md:flex-col leading-10	">
          <h1 className="hidden md:block md:text-[32px] md:pt-6 font-bold text-[40px] text-white pt-12">
            adamakeyes
          </h1>
          <p className="text-white text-center text-[40px] mt-20  md:text-start md:text-[72px] md:mt-14 md:leading-[60px] lg:text-[88px] lg:leading-[75px]">
            Nice to meet you! <span> </span>
            <span className="text-white text-center text-[40px] block md:inline md:text-[52px]	md:text-start lg:block">
              I'm{" "}
              <span
                className="underline decoration-green-300	 underline-offset-[0.6rem] md:text-start 
               "
              >
                {" "}
                Adam Keyes.
              </span>
            </span>
          </p>
        </div>
        <div className="my-4 mx-2 md:flex md:flex-wrap md:text-wrap md:mb-8 lg:w-[60%]">
          <p className="text-gray-400 text-center font-semibold px-[1.5rem] md:text-start md:w-[90%] md:px-0">
            Based in the UK. I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
        <div className="my-8 ">
          <h1
            className="uppercase cursor-pointer text-white text-center tracking-[0.20rem] 
          underline decoration-green-300 underline-offset-[1.2rem] decoration-2 font-bold hover:text-green-300 md:text-start lg:pt-10"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
