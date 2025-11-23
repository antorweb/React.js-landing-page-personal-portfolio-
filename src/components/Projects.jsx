// import React from "react";
// import CommonHead from "./common/CommonHead";

// const Projects = () => {
//   const skills = [
//     { name: "Adobe Illustration", value: 60 },
//     { name: "Adobe Photoshop", value: 85 },
//     { name: "Figma", value: 90 },
//     { name: "Adobe XD", value: 70 },
//   ];

//   return (
//     <>
//       <section id="projects" className="pb-[140px] ">
//         <div className="container">
//           <div className="flex justify-center">
//             <h2 className="text-[40px] font-semibold underline font-main text-primary">
//               View all Projects
//             </h2>
//           </div>
//           <div className="pt-[140px]">
//             <div className="flex justify-around items-center">
//               <div>
//                 <div>
//                   <CommonHead comp={"OUR SKILLS"} />
//                 </div>
//                 <div className="w-[544px] h-[120px] pt-[11px]">
//                   <CommonHead comh2={"Modern Digital Creative Agency"} />
//                 </div>

//                 <p className="w-[544px] h-[52px] pt-[14px]">
//                   If you need to redesign your new project, new visual strategy,
//                   ux structure or you do have some cool ideas for collaboration
//                 </p>

//                 <div className="w-[179px] h-[64px] mt-[40px] bg-[#E5745D]">
//                   <button className="w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]">
//                     Download CV
//                   </button>{" "}
//                 </div>
//               </div>

//               <div className="w-[500px]   space-y-6 ">
//                 {skills.map((skill, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium text-[#0b2d28]">
//                         {skill.name}
//                       </span>
//                       <span className="text-sm font-medium text-[#0b2d28]">
//                         {skill.value}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-[#0b2d28]  h-2.5">
//                       <div
//                         className="bg-[#f48b7b] h-2.5 "
//                         style={{ width: `${skill.value}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;




import React from "react";
import CommonHead from "./common/CommonHead";

const Projects = () => {
  const skills = [
    { name: "Adobe Illustration", value: 60 },
    { name: "Adobe Photoshop", value: 85 },
    { name: "Figma", value: 90 },
    { name: "Adobe XD", value: 70 },
  ];

  return (
    <>
      <section id="projects" className="pb-[140px]">
        <div className="container">

          {/* Heading */}
          <div className="flex justify-center">
            <h2 className="text-[30px] sm:text-[34px] md:text-[40px] font-semibold underline font-main text-primary">
              View all Projects
            </h2>
          </div>

          <div className="pt-[60px] md:pt-[140px]">
            <div className="flex flex-col lg:flex-row justify-around items-center gap-[50px] lg:gap-0">

              {/* LEFT SIDE */}
              <div className="text-center lg:text-left">
                <div>
                  <CommonHead comp={"OUR SKILLS"} />
                </div>

                <div className="w-full lg:w-[544px] h-auto pt-[11px]">
                  <CommonHead comh2={"Modern Digital Creative Agency"} />
                </div>

                <p className="w-full lg:w-[544px] h-auto pt-[14px] text-[16px] leading-[24px]">
                  If you need to redesign your new project, new visual strategy,
                  ux structure or you do have some cool ideas for collaboration
                </p>

                {/* BUTTON */}
                <div className="w-[179px] h-[64px] mt-[40px] mx-auto lg:mx-0 bg-[#E5745D]">
                  <button className="w-[169px] h-[54px] m-1 border text-[18px] font-medium font-jost text-[#fff] border-[#fff]">
                    Download CV
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE – PROGRESS BARS */}
              <div className="w-full sm:w-[500px] space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[#0b2d28]">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-[#0b2d28]">
                        {skill.value}%
                      </span>
                    </div>

                    <div className="w-full bg-[#0b2d28] h-2.5">
                      <div
                        className="bg-[#f48b7b] h-2.5"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
