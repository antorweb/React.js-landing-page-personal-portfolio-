// 



import React from "react";
import CommonHead from "./common/CommonHead";
import { RiUserLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">

          <div>
            <CommonHead comp={"Our blog"} />
          </div>

          <div className="w-[457px] max-md:w-full pt-[24px]">
            <CommonHead comh2={"The Future of AI "} />
            <span className="text-[50px] leading-[60px] font-medium font-main text-main max-md:text-[30px] max-md:leading-[36px]">
              in Digital Marketing
            </span>
          </div>

          <div
            id="blog-row"
            className="pt-[42px] flex flex-col gap-[40px]"
          >

            {/* ---------------- 1 block ---------------- */}
            <div className="border border-[#F9F4F1] flex items-center 
                            max-xl:flex-col max-xl:items-start max-xl:gap-[20px] p-[20px]">

              <div className="pl-[40px] max-xl:pl-0 flex flex-col gap-[18px] pb-[60px] max-xl:pb-0">
                <div className="flex items-center gap-[10px]">
                  <RiUserLine />
                  <p className="text-[17px] font-medium font-jost text-main">
                    By Brian Cumin
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <GoClock />
                  <p className="text-[17px] font-medium font-jost text-main">
                    March 27,2023
                  </p>
                </div>
                <div>
                  <p className="text-[17px] font-medium font-jost text-main">
                    24 Comments
                  </p>
                </div>
              </div>

              <div
                className="w-[342px] h-[240px] border border-[#F9F4F1] 
                           mr-[134px] ml-[170px]
                           max-xl:m-0 max-md:w-full max-md:h-auto"
              >
                <div className="w-[300px] h-[200px] bg-[#C4C4C4] m-[20px] max-md:w-full max-md:h-[200px] max-md:m-0"></div>
              </div>

              <div className="w-[490px] max-md:w-full">
                <h2 className="text-[30px] font-medium font-main text-main 
                               max-md:text-[22px] max-md:leading-[30px]">
                  Personalization and Automation for Better Results
                </h2>
              </div>
            </div>

            {/* ---------------- 2 block ---------------- */}
            <div className="border border-[#F9F4F1] flex items-center 
                            max-xl:flex-col max-xl:items-start max-xl:gap-[20px] p-[20px]">

              <div className="pl-[40px] max-xl:pl-0 flex flex-col gap-[18px] pb-[60px] max-xl:pb-0">
                <div className="flex items-center gap-[10px]">
                  <RiUserLine />
                  <p className="text-[17px] font-medium font-jost text-main">
                    By Brian Cumin
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <GoClock />
                  <p className="text-[17px] font-medium font-jost text-main">
                    March 27,2023
                  </p>
                </div>
                <div>
                  <p className="text-[17px] font-medium font-jost text-main">
                    24 Comments
                  </p>
                </div>
              </div>

              <div
                className="w-[342px] h-[240px] border border-[#F9F4F1]
                           mr-[134px] ml-[170px]
                           max-xl:m-0 max-md:w-full max-md:h-auto"
              >
                <div className="w-[300px] h-[200px] bg-[#C4C4C4] m-[20px] max-md:w-full max-md:h-[200px] max-md:m-0"></div>
              </div>

              <div className="w-[490px] max-md:w-full">
                <h2 className="text-[30px] font-medium font-main text-main 
                               max-md:text-[22px] max-md:leading-[30px]">
                  Personalization and Automation for Better Results
                </h2>
              </div>
            </div>

            {/* ---------------- 3 block ---------------- */}
            <div className="border border-[#F9F4F1] flex items-center 
                            max-xl:flex-col max-xl:items-start max-xl:gap-[20px] p-[20px]">

              <div className="pl-[40px] max-xl:pl-0 flex flex-col gap-[18px] pb-[60px] max-xl:pb-0">
                <div className="flex items-center gap-[10px]">
                  <RiUserLine />
                  <p className="text-[17px] font-medium font-jost text-main">
                    By Brian Cumin
                  </p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <GoClock />
                  <p className="text-[17px] font-medium font-jost text-main">
                    March 27,2023
                  </p>
                </div>
                <div>
                  <p className="text-[17px] font-medium font-jost text-main">
                    24 Comments
                  </p>
                </div>
              </div>

              <div
                className="w-[342px] h-[240px] border border-[#F9F4F1]
                           mr-[134px] ml-[170px]
                           max-xl:m-0 max-md:w-full max-md:h-auto"
              >
                <div className="w-[300px] h-[200px] bg-[#C4C4C4] m-[20px] max-md:w-full max-md:h-[200px] max-md:m-0"></div>
              </div>

              <div className="w-[490px] max-md:w-full">
                <h2 className="text-[30px] font-medium font-main text-main 
                               max-md:text-[22px] max-md:leading-[30px]">
                  Personalization and Automation for Better Results
                </h2>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
