// import React from "react";
// import CommonHead from "./common/CommonHead";

// const Portfolio = () => {
//   return (
//     <>
//       <section id="portfolio" className="">
//         <div className="container">
//           <div className="flex justify-center">
//             <CommonHead comh2={"My Working Portfolio"} />
//           </div>
//           <div className="flex gap-[30px] pt-[40px] pb-[109px] items-center">
//             <div>
//               <div className="w-[514px] h-[400px] border ">
//                 <div className="w-[454px] h-[340px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//               <div className="w-[514px] h-[660px] my-[30px] border">
//                 <div className="w-[454px] h-[600px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//               <div className="w-[514px] h-[400px] border ">
//                 <div className="w-[454px] h-[340px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//             </div>
//             <div>
//               <div className="w-[514px] h-[660px] border">
//                 <div className="w-[454px] h-[600px] bg-[#C4C4C4] m-[30px] flex justify-center">
//                   <div className="w-[394px] h-[120px] bg-white mt-[421px]">
//                     <div className="pt-[32px] pb-[34px] pl-[30px]">
//                       <h2 className="text-[16px] font-semibold font-main text-primary">
//                         UI/UX Design
//                       </h2>
//                       <h2 className="text-[24px] font-bold font-main text-main">
//                         Daily Hydro-Drops
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-[514px] my-[30px] h-[400px] border ">
//                 <div className="w-[454px] h-[340px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//               <div className="w-[514px] h-[660px] border">
//                 <div className="w-[454px] h-[600px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//             </div>
//             <div>
//               <div className="w-[514px] h-[400px] border ">
//                 <div className="w-[454px] h-[340px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//               <div className="w-[514px] my-[30px] h-[660px] border">
//                 <div className="w-[454px] h-[600px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//               <div className="w-[514px] h-[400px] border ">
//                 <div className="w-[454px] h-[340px] bg-[#C4C4C4] m-[30px]"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;












import React from "react";
import CommonHead from "./common/CommonHead";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="">
        <div className="container">
          
          {/* Heading Center */}
          <div className="flex justify-center">
            <CommonHead comh2={"My Working Portfolio"} />
          </div>

          {/* MAIN WRAPPER */}
          <div className="flex lg:flex-row flex-col gap-[30px] pt-[40px] pb-[109px] items-center">

            {/* COLUMN 1 */}
            <div className="w-full flex flex-col items-center lg:items-start">
              <div className="w-[514px] max-w-full h-[400px] border ">
                <div className="w-[454px] max-w-full h-[340px] bg-[#C4C4C4] m-[30px]"></div>
              </div>

              <div className="w-[514px] max-w-full h-[660px] my-[30px] border">
                <div className="w-[454px] max-w-full h-[600px] bg-[#C4C4C4] m-[30px]"></div>
              </div>

              <div className="w-[514px] max-w-full h-[400px] border ">
                <div className="w-[454px] max-w-full h-[340px] bg-[#C4C4C4] m-[30px]"></div>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="w-full flex flex-col items-center lg:items-start">
              <div className="w-[514px] max-w-full h-[660px] border">
                <div className="w-[454px] max-w-full h-[600px] bg-[#C4C4C4] m-[30px] flex justify-center">
                  <div className="w-[394px] max-w-full h-[120px] bg-white mt-[421px]">
                    <div className="pt-[32px] pb-[34px] pl-[30px]">
                      <h2 className="text-[16px] font-semibold font-main text-primary">
                        UI/UX Design
                      </h2>
                      <h2 className="text-[24px] font-bold font-main text-main">
                        Daily Hydro-Drops
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[514px] max-w-full my-[30px] h-[400px] border ">
                <div className="w-[454px] max-w-full h-[340px] bg-[#C4C4C4] m-[30px]"></div>
              </div>

              <div className="w-[514px] max-w-full h-[660px] border">
                <div className="w-[454px] max-w-full h-[600px] bg-[#C4C4C4] m-[30px]"></div>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div class="w-full flex flex-col items-center lg:items-start">
              <div className="w-[514px] max-w-full h-[400px] border ">
                <div className="w-[454px] max-w-full h-[340px] bg-[#C4C4C4] m-[30px]"></div>
              </div>

              <div className="w-[514px] max-w-full my-[30px] h-[660px] border">
                <div className="w-[454px] max-w-full h-[600px] bg-[#C4C4C4] m-[30px]"></div>
              </div>

              <div className="w-[514px] max-w-full h-[400px] border ">
                <div className="w-[454px] max-w-full h-[340px] bg-[#C4C4C4] m-[30px]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
