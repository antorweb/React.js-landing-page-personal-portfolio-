// import React from "react";
// import CommonHead from "./common/CommonHead";

// const About = () => {
//   return (
//     <>
//       <section id="about" className="py-[120px]">
//         <div className="container">
//           <div>
//             <div>
//               <CommonHead comp={"About me"} />
//             </div>
//             <div className="w-[685px] pt-[11px]">
//               <CommonHead
//                 comh2={
//                   "At The Heart of Design is An Opportunity to Problem Solve."
//                 }
//               />
//             </div>
//           </div>
//           <div className="pt-[40px] flex gap-[110px] ">
//             <div className="w-[740px] h-[420px] bg-[#87BEAD] pt-[40px]">
//               <img src="#" alt="about-img" />
//             </div>
//             <div className="w-[440px] h-[289px] flex flex-col gap-[30px]">
//               <p className="text-[18px] font-normal font-jost text-main">
//                 Solvency based award-winning design director and UI/UX design
//                 expert with 10 years of experience in design and management.
//               </p>
//               <p className="text-[18px] font-normal font-jost text-main">
//                 Internum various sit a met mattes ululate denim. Orcin asellus
//                 celestas tells rut rum tells pelletised eu. Nunc pulvinar supine
//                 et ligula albacore.
//               </p>

//               <div className="w-[179px] h-[64px]  bg-[#E5745D]">
//                 <button className="w-[169px] h-[54px] m-1  border text-[18px] font-medium font-jost text-[#fff]  border-[#fff]">
//                   Download CV
//                 </button>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;


import React from "react";
import CommonHead from "./common/CommonHead";

const About = () => {
  return (
    <>
      <section id="about" className="py-[60px] sm:py-[80px] md:py-[120px]">
        <div className="container">
          <div className="text-center md:text-left">
            <div>
              <CommonHead comp={"About me"} />
            </div>
            <div className="w-full md:w-[685px] pt-[11px] mx-auto md:mx-0">
              <CommonHead
                comh2={
                  "At The Heart of Design is An Opportunity to Problem Solve."
                }
              />
            </div>
          </div>

          <div className="pt-[40px] flex flex-col md:flex-row gap-[40px] md:gap-[110px] items-center md:items-start">
            
            {/* Left Image Box */}
            <div className="w-full sm:w-[500px] md:w-[740px] h-[260px] sm:h-[340px] md:h-[420px] bg-[#87BEAD] pt-[40px] rounded-[10px] flex justify-center items-center">
              <img src="#" alt="about-img" className="max-w-full h-auto" />
            </div>

            {/* Right Text Box */}
            <div className="w-full md:w-[440px] h-auto md:h-[289px] flex flex-col gap-[30px] text-center md:text-left">
              <p className="text-[16px] sm:text-[17px] md:text-[18px] font-normal font-jost text-main">
                Solvency based award-winning design director and UI/UX design
                expert with 10 years of experience in design and management.
              </p>
              <p className="text-[16px] sm:text-[17px] md:text-[18px] font-normal font-jost text-main">
                Internum various sit a met mattes ululate denim. Orcin asellus
                celestas tells rut rum tells pelletised eu. Nunc pulvinar supine
                et ligula albacore.
              </p>

              <div className="w-[179px] h-[64px] mx-auto md:mx-0 bg-[#E5745D]">
                <button className="w-[169px] h-[54px] m-1 border text-[18px] font-medium font-jost text-[#fff] border-[#fff]">
                  Download CV
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
