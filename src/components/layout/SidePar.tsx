import { useState } from "react";
import logo from "../../assets/Group 14.png";
import { LuLayoutDashboard, LuStethoscope } from "react-icons/lu";
import { MdBurstMode, MdCreditScore, MdDomain, MdEngineering, MdOutlineSchool, MdOutlineStorefront } from "react-icons/md";
import { CiMenuFries, CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SidePar = () => {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  

  return ( 
    <>
    <div className="py-4 w-fit absolute top-3 left-3   z-50 block md:hidden  cursor-pointer " onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <CiMenuFries size={30} className="w-7 h-7  z-50 cursor-pointer" />
        ) : (
          <IoMdClose  size={30} className="w-7 h-7 z-50 cursor-pointer fixed " />
        )}
    </div>
    <div
  className={`fixed top-0 left-0 h-screen w-fit overflow-y-auto scrollbar scrollbar-thumb-blue_maincolor sidebar-scrollbar transform transition-transform duration-300 ease-in-out ${
    isOpen ? "-translate-x-full" : "translate-x-0"
  }`}
>

      <div className="w-[236px] shadow-sm border min-h-screen   ">
        <div className="flex justify-center py-6 shadow-sm     ">
          <img src={logo} alt="Logo"  className="w-[100px] md:[150px]" />
        </div>

        <div className="text-blue_maincolor text-[18px] font-inter font-semibold leading-[16px] break-words overflow-auto ">
          <ul className="flex flex-col gap-2 f0nt-[600] ">
            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Dashboard"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Dashboard")}
            >
              <LuLayoutDashboard />
              Dashboard
            </li>
            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Medical"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Medical")}
            >
              <LuStethoscope />
              Medical
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Tourism"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Tourism")}
            >
              <MdCreditScore />
              Tourism
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Engineering"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Engineering")}
            >
              <MdEngineering />
              Engineering
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Education"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Education")}
            >
              <MdOutlineSchool />

              Education
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Trade"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Trade")}
            >
              <MdOutlineStorefront />

              Trade & Commerce
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Real"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Real")}
            >
              <MdDomain />


              Real Estate
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Graphics"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Graphics")}
            >
              <MdBurstMode />



              Graphics
            </li>

            <li
              className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                active === "Settings"
                  ? "bg-blue_maincolor text-white"
                  : "bg-white text-blue_maincolor"
              }`}
              onClick={() => setActive("Settings")}
            >
             <CiSettings />




              Settings
            </li>




          </ul>
        </div>
      </div>
    </div>
    </>

  );
};

export default SidePar;
