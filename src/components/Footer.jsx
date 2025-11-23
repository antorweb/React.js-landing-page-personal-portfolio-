// import React from "react";
// import logo from "../assets/images/logo.png";
// import { Link } from "react-router";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <section className="pb-[80px]">
//         <div className="container">
//           <div className="flex justify-between ">
//             <div>
//               <div>
//                 <img src={logo} alt="footer_logo" />
//               </div>
//               <div className="w-[330px] pt-[22px] mb-[53px]">
//                 <p className="">
//                   Design League is the world’s leading community have for
//                   creatives to share, grow, and learn. Design League is the
//                   world’s leading community.
//                 </p>
//               </div>
//               <div className="flex gap-[23px]">
//                 <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white  hover:rounded-[8px] flex justify-center items-center">
//                   <FaFacebookF className="text-[18px] " />
//                 </Link>
//                 <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white  hover:rounded-[8px] flex justify-center items-center">
//                   <FaTwitter className="text-[18px] " />
//                 </Link>
//                 <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white  hover:rounded-[8px] flex justify-center items-center">
//                   <AiFillInstagram className="text-[18px] " />
//                 </Link>
//                 <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white  hover:rounded-[8px] flex justify-center items-center">
//                   <FaLinkedinIn className="text-[18px] " />
//                 </Link>
//                 <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white  hover:rounded-[8px] flex justify-center items-center">
//                   <FaYoutube className="text-[18px] " />
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <div className="mb-[24px]">
//                 <h2 className="text-[20px] font-bold font-main text-main">
//                   Product
//                 </h2>{" "}
//               </div>
//               <div className="flex flex-col gap-[18px]">
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Features
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Pricing
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Case studies
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Reviews
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Updates
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <div className="mb-[24px]">
//                 <h2 className="text-[20px] font-bold font-main text-main">
//                   Company
//                 </h2>{" "}
//               </div>
//               <div className="flex flex-col gap-[18px]">
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   About
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Contact us
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Careers
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Culture
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Blog
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <div className="mb-[24px]">
//                 <h2 className="text-[20px] font-bold font-main text-main">
//                   Support
//                 </h2>{" "}
//               </div>
//               <div className="flex flex-col gap-[18px]">
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Getting started
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Help center
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Server status
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Report a bug
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Chat support
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <div className="mb-[24px]">
//                 <h2 className="text-[20px] font-bold font-main text-main">
//                   Downloads
//                 </h2>{" "}
//               </div>
//               <div className="flex flex-col gap-[18px]">
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   iOS
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Android
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Mac
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Windows
//                 </Link>
//                 <Link className="text-[15px] font-normal font-jost text-main">
//                   Chrome
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;



import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="pb-[80px]">
        <div className="container">
          <div
            className="flex justify-between 
                       max-lg:flex-wrap max-lg:gap-[40px] 
                       max-md:flex-col max-md:text-center max-md:items-center"
          >
            {/* LEFT SECTION */}
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <div>
                <img
                  src={logo}
                  alt="footer_logo"
                  className="max-md:w-[150px]"
                />
              </div>

              <div className="w-[330px] pt-[22px] mb-[53px] max-md:w-[90%]">
                <p>
                  Design League is the world’s leading community have for
                  creatives to share, grow, and learn. Design League is the
                  world’s leading community.
                </p>
              </div>

              <div className="flex gap-[23px] max-md:justify-center">
                <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white hover:rounded-[8px] flex justify-center items-center">
                  <FaFacebookF className="text-[18px]" />
                </Link>
                <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white hover:rounded-[8px] flex justify-center items-center">
                  <FaTwitter className="text-[18px]" />
                </Link>
                <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white hover:rounded-[8px] flex justify-center items-center">
                  <AiFillInstagram className="text-[18px]" />
                </Link>
                <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white hover:rounded-[8px] flex justify-center items-center">
                  <FaLinkedinIn className="text-[18px]" />
                </Link>
                <Link className=" hover:bg-primary hover:w-[36px] hover:h-[36px] hover:text-white hover:rounded-[8px] flex justify-center items-center">
                  <FaYoutube className="text-[18px]" />
                </Link>
              </div>
            </div>

            {/* PRODUCT */}
            <div className="max-md:text-center">
              <div className="mb-[24px]">
                <h2 className="text-[20px] font-bold font-main text-main">
                  Product
                </h2>
              </div>
              <div className="flex flex-col gap-[18px]">
                <Link className="text-[15px] font-normal font-jost text-main">
                  Features
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Pricing
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Case studies
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Reviews
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Updates
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="max-md:text-center">
              <div className="mb-[24px]">
                <h2 className="text-[20px] font-bold font-main text-main">
                  Company
                </h2>
              </div>
              <div className="flex flex-col gap-[18px]">
                <Link className="text-[15px] font-normal font-jost text-main">
                  About
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Contact us
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Careers
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Culture
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Blog
                </Link>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="max-md:text-center">
              <div className="mb-[24px]">
                <h2 className="text-[20px] font-bold font-main text-main">
                  Support
                </h2>
              </div>
              <div className="flex flex-col gap-[18px]">
                <Link className="text-[15px] font-normal font-jost text-main">
                  Getting started
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Help center
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Server status
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Report a bug
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Chat support
                </Link>
              </div>
            </div>

            {/* DOWNLOAD */}
            <div className="max-md:text-center">
              <div className="mb-[24px]">
                <h2 className="text-[20px] font-bold font-main text-main">
                  Downloads
                </h2>
              </div>
              <div className="flex flex-col gap-[18px]">
                <Link className="text-[15px] font-normal font-jost text-main">
                  iOS
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Android
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Mac
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Windows
                </Link>
                <Link className="text-[15px] font-normal font-jost text-main">
                  Chrome
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
