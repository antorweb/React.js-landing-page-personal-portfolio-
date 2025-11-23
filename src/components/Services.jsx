// import React from "react";
// import CommonHead from "./common/CommonHead";
// import card from "../assets/images/card.png";
// import icon from "../assets/images/icon1.png";
// import icon2 from "../assets/images/icon2.png";
// import icon3 from "../assets/images/icon3.png";
// import { BsArrowRight } from "react-icons/bs";

// const Services = () => {
//   return (
//     <>
//       <section id="service" className="pt-[112px] pb-[128px]">
//         <div className="container">
//           <div className="flex justify-center">
//             <CommonHead comp={"Service"} />
//           </div>

//           <div className="flex justify-center">
//             <div className="w-[475px] flex justify-center pt-[24px] text-center">
//               <CommonHead comh2={" 09+ Years Experience in This Field "} />
//             </div>
//           </div>
//           <div className="mt-[50px] flex justify-around ">
//             {/* ------------------  1st card*/}

//             <div
//               style={{
//                 background: `URL(${card})`,
//                 backgroundRepeat: `no-repeat`,
//                 backgroundSize: `cover`,
//               }}
//               className="pl-[50px]  w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
//             >
//               <div className="pt-[50px]">
//                 <img className="text-[80px]" src={icon} alt="icon-1" />
//               </div>
//               <div className="pt-[64px] pb-[75px]">
//                 <h2 className="text-[24px] font-extrabold font-main text-main">
//                   Web & Development
//                 </h2>
//                 <p className=" w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
//                   Facilizes sed odic morbid quiz commodore odic nexus et
//                   malasadas fames research and brand strategy system.
//                 </p>
//               </div>
//               <div>
//                 <button>
//                   <BsArrowRight className="text-[28px]" />
//                 </button>
//               </div>
//             </div>

//             {/* ----------------- 2nd card */}

//             <div
//               style={{
//                 background: `URL(${card})`,
//                 backgroundRepeat: `no-repeat`,
//                 backgroundSize: `cover`,
//               }}
//               className="pl-[50px]  w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
//             >
//               <div className="pt-[50px]">
//                 <img className="text-[80px]" src={icon2} alt="icon-1" />
//               </div>
//               <div className="pt-[64px] pb-[75px]">
//                 <h2 className="text-[24px] font-extrabold font-main text-main">
//                   Graphic Design
//                 </h2>
//                 <p className=" w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
//                   Facilizes sed odic morbid quiz commodore odic nexus et
//                   malasadas fames research and brand strategy system.
//                 </p>
//               </div>
//               <div>
//                 <button>
//                   <BsArrowRight className="text-[28px]" />
//                 </button>
//               </div>
//             </div>

//             {/* ------------------ 3rd card */}

//             <div
//               style={{
//                 background: `URL(${card})`,
//                 backgroundRepeat: `no-repeat`,
//                 backgroundSize: `cover`,
//               }}
//               className="pl-[50px]  w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
//             >
//               <div className="pt-[50px]">
//                 <img className="text-[80px]" src={icon3} alt="icon-1" />
//               </div>
//               <div className="pt-[64px] pb-[75px]">
//                 <h2 className="text-[24px] font-extrabold font-main text-main">
//                   Writing and Marketing
//                 </h2>
//                 <p className=" w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
//                   Facilizes sed odic morbid quiz commodore odic nexus et
//                   malasadas fames research and brand strategy system.
//                 </p>
//               </div>
//               <div>
//                 <button>
//                   <BsArrowRight className="text-[28px]" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;


import React from "react";
import CommonHead from "./common/CommonHead";
import card from "../assets/images/card.png";
import icon from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section id="service" className="pt-[112px] pb-[128px]">
        <div className="container">

          {/* Heading */}
          <div className="flex justify-center">
            <CommonHead comp={"Service"} />
          </div>

          <div className="flex justify-center">
            <div className="w-full sm:w-[475px] flex justify-center pt-[24px] text-center">
              <CommonHead comh2={" 09+ Years Experience in This Field "} />
            </div>
          </div>

          {/* CARDS */}
          <div className="mt-[50px] flex flex-col md:flex-row justify-center md:justify-around items-center gap-[40px] md:gap-0">

            {/* ------------ CARD 1 ------------ */}
            <div
              style={{
                background: `URL(${card})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
              className="pl-[50px] w-[90%] sm:w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
            >
              <div className="pt-[50px]">
                <img className="text-[80px]" src={icon} alt="icon-1" />
              </div>

              <div className="pt-[64px] pb-[75px]">
                <h2 className="text-[22px] sm:text-[24px] font-extrabold font-main text-main">
                  Web & Development
                </h2>
                <p className="w-[260px] sm:w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
                  Facilizes sed odic morbid quiz commodore odic nexus et
                  malasadas fames research and brand strategy system.
                </p>
              </div>

              <div>
                <button>
                  <BsArrowRight className="text-[28px]" />
                </button>
              </div>
            </div>

            {/* ------------ CARD 2 ------------ */}
            <div
              style={{
                background: `URL(${card})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
              className="pl-[50px] w-[90%] sm:w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
            >
              <div className="pt-[50px]">
                <img className="text-[80px]" src={icon2} alt="icon-2" />
              </div>

              <div className="pt-[64px] pb-[75px]">
                <h2 className="text-[22px] sm:text-[24px] font-extrabold font-main text-main">
                  Graphic Design
                </h2>
                <p className="w-[260px] sm:w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
                  Facilizes sed odic morbid quiz commodore odic nexus et
                  malasadas fames research and brand strategy system.
                </p>
              </div>

              <div>
                <button>
                  <BsArrowRight className="text-[28px]" />
                </button>
              </div>
            </div>

            {/* ------------ CARD 3 ------------ */}
            <div
              style={{
                background: `URL(${card})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
              className="pl-[50px] w-[90%] sm:w-[450px] h-[454px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]"
            >
              <div className="pt-[50px]">
                <img className="text-[80px]" src={icon3} alt="icon-3" />
              </div>

              <div className="pt-[64px] pb-[75px]">
                <h2 className="text-[22px] sm:text-[24px] font-extrabold font-main text-main">
                  Writing and Marketing
                </h2>
                <p className="w-[260px] sm:w-[300px] h-[72px] text-[16px] font-normal font-jost text-main">
                  Facilizes sed odic morbid quiz commodore odic nexus et
                  malasadas fames research and brand strategy system.
                </p>
              </div>

              <div>
                <button>
                  <BsArrowRight className="text-[28px]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
