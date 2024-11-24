import { useState } from "react";
import logo from "../../assets/Group 14.png";
import { LuLayoutDashboard, LuStethoscope } from "react-icons/lu";
import {
  MdBurstMode,
  MdCreditScore,
  MdDomain,
  MdEngineering,
  MdMenu,
  MdOutlineSchool,
  MdOutlineStorefront,
} from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { toogleInboxMessage } from "../../app/Slices/InboxMessage";
import { useTranslation } from "react-i18next";

const SidePar = () => {
  const { t } = useTranslation();
  const isOpenInboxMessage = useSelector(
    (state: RootState) => state.Message.isOpen
  );
  const dispatch = useAppDispatch();

  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // مغلق افتراضياً في الشاشات الصغيرة

  const toogleSidebar = () => {
    setIsOpen((prev) => !prev); // عكس الحالة
    if (isOpenInboxMessage) {
      dispatch(toogleInboxMessage());
    }
  };

  return (
    <>
      {/* زر الفتح والإغلاق - يظهر فقط في الشاشات الصغيرة */}
      <div
        className="py-4 absolute left-3 z-50 block md:hidden cursor-pointer"
        onClick={toogleSidebar}
      >
        {!isOpen ? (
          <MdMenu size={30} className="w-7 h-7 z-50 cursor-pointer" />
        ) : (
          <IoMdClose size={30} className="w-7 h-7 z-50 cursor-pointer fixed" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen overflow-y-auto scrollbar scrollbar-thumb-blue_maincolor sidebar-scrollbar transform transition-transform duration-300 ease-in-out bg-white shadow-sm border ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`} 
        style={{ zIndex: 40 }}
      >
        <div className="w-fit min-h-screen">
          <div className="flex justify-center py-6 shadow-sm">
            <img src={logo} alt="Logo" className="w-[100px] md:w-[150px]" />
          </div>

          <div className="text-blue_maincolor text-[18px] font-inter font-semibold leading-[16px] break-words overflow-auto">
            <ul className="flex flex-col gap-2">
              {[
                { label: "Dashboard", icon: <LuLayoutDashboard /> },
                { label: "Medical", icon: <LuStethoscope /> },
                { label: "Tourism", icon: <MdCreditScore /> },
                { label: "Engineering", icon: <MdEngineering /> },
                { label: "Education", icon: <MdOutlineSchool /> },
                { label: "TradeCommerce", icon: <MdOutlineStorefront /> },
                { label: "RealEstate", icon: <MdDomain /> },
                { label: "Graphics", icon: <MdBurstMode /> },
                { label: "Settings", icon: <CiSettings /> },
              ].map((item) => (
                <li
                  key={item.label}
                  className={`flex items-center gap-2 px-2 py-4 border border-gray_maincolor mb-1 cursor-pointer ${
                    active === item.label
                      ? "bg-blue_maincolor text-white"
                      : "bg-white text-blue_maincolor"
                  }`}
                  onClick={() => setActive(item.label)}
                >
                  {item.icon}
                  {t(item.label)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePar;
