// import React from "react";
// import logo from "../assets/images/logo.png";
// import { Link } from "react-router";
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineSort } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <>
//       <nav
//         id="navbar"
//         className="py-[20px] bg-[#e5745d0d] border-b-1 border-[#D3DCD4]"
//       >
//         <div className="container">
//           <div className="flex justify-between items-center">
//             <div>
//               <Link to={"/"}>
//                 <img className="w-[122px]" src={logo} alt="nav-logo" />
//               </Link>
//             </div>
//             <div>
//               <ul className="flex gap-[88px] items-center">
//                 <li className="text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
//                   <Link>Home</Link>
//                 </li>
//                 <li className="text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
//                   <Link>Projects</Link>
//                 </li>
//                 <li className="text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
//                   <Link>Pages</Link>
//                 </li>
//                 <li className="text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
//                   <Link>Blog</Link>
//                 </li>
//                 <li className="text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
//                   <Link>Contact</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex gap-[25px]">
//               <button>
//                 <IoIosSearch className="text-[17px]" />
//               </button>
//               <button className="w-[47px] flex justify-end items-center border-l-2">
//                 <MdOutlineSort className="text-[17px]" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        id="navbar"
        className="py-[20px] bg-[#e5745d0d] border-b-1 border-[#D3DCD4]"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <div>
              <Link to={"/"}>
                <img className="w-[122px] md:w-[150px]" src={logo} alt="nav-logo" />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:block">
              <ul className="flex gap-[40px] xl:gap-[88px] items-center">
                <li className="text-[16px] md:text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
                  <Link>Home</Link>
                </li>
                <li className="text-[16px] md:text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
                  <Link>Projects</Link>
                </li>
                <li className="text-[16px] md:text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
                  <Link>Pages</Link>
                </li>
                <li className="text-[16px] md:text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
                  <Link>Blog</Link>
                </li>
                <li className="text-[16px] md:text-[18px] font-normal font-jost text-main hover:text-primary duration-[.3s]">
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>

            {/* ICONS + MOBILE TOGGLE */}
            <div className="flex gap-[25px]">

              <button>
                <IoIosSearch className="text-[17px]" />
              </button>

              {/* mobile toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="w-[47px] flex lg:hidden justify-end items-center border-l-2"
              >
                <MdOutlineSort className="text-[24px]" />
              </button>

              {/* desktop sort icon */}
              <button className="w-[47px] hidden lg:flex justify-end items-center border-l-2">
                <MdOutlineSort className="text-[17px]" />
              </button>

            </div>
          </div>


          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden mt-4 bg-white p-5 rounded-lg shadow-md">
              <ul className="flex flex-col gap-4">
                <li className="text-[18px] font-jost text-main hover:text-primary">
                  <Link onClick={() => setOpen(false)}>Home</Link>
                </li>
                <li className="text-[18px] font-jost text-main hover:text-primary">
                  <Link onClick={() => setOpen(false)}>Projects</Link>
                </li>
                <li className="text-[18px] font-jost text-main hover:text-primary">
                  <Link onClick={() => setOpen(false)}>Pages</Link>
                </li>
                <li className="text-[18px] font-jost text-main hover:text-primary">
                  <Link onClick={() => setOpen(false)}>Blog</Link>
                </li>
                <li className="text-[18px] font-jost text-main hover:text-primary">
                  <Link onClick={() => setOpen(false)}>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
