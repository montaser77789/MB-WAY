import { RootState, useAppDispatch } from "../../app/store";
import { toogleInboxMessage } from "../../app/Slices/InboxMessage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import personalImg from "../../../src/assets/Ellipse 38.png";


const InboxMessage = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const isOpenInboxMessage = useSelector(
        (state: RootState) => state.Message.isOpen
      );
      console.log(isOpenInboxMessage);
  return (
    <>
    <div
    className={`shadow-lg rounded-lg p-1 bg-white overflow-y-auto scrollbar scrollbar-thumb-blue_maincolor sidebar-scrollbar h-full
lg:col-span-2 lg:transform-none lg:static
fixed top-0 bottom-0 right-0  transform transition-transform duration-500 ease-in-out ${
isOpenInboxMessage ? "translate-x-0" : "translate-x-full"
}`}
    style={{ zIndex: 55 }}
  >
    <div className="box-border flex flex-col items-stretch justify-center h-[120px] lg:h-[70px] border-b-4 border-gray-400 ">
      <div className="flex flex-row items-center justify-between lg:justify-start  w-full h-full  ">
        <div className="flex flex-row items-center justify-between ">
          <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
          <p className="ml-1 text-[16px] font-bold leading-[16px] text-blue_maincolor ">
            {t("inboxMessage")}
          </p>
        </div>
        <div onClick={() => dispatch(toogleInboxMessage())}>
          <IoMdClose
            size={20}
            className="w-7 h-7 z-50 cursor-pointer  block lg:hidden color-blue_maincolor"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start mt-[26px]">
        <div className="box-border flex flex-col items-stretch justify-center w-[85px]">
          <p className="text-center text-[16px] font-bold leading-[16px] text-blue-700 cursor-pointer">
            {t("manager")}
          </p>
          <div className="mt-[10px] border-t-4 border-blue-700" />
        </div>
        <div className="box-border flex flex-col items-stretch justify-center w-[85px] ml-[13px]">
          <p className="text-center text-[16px] font-bold leading-[16px] text-gray-400 cursor-pointer">
            {t("employee")}
          </p>
          <div className="mt-[10px] border-t-4 border-gray-400" />
        </div>
      </div>
    </div>

    <div className="min-w-[180px] my-2 focus:border-2 ">
      <div className="flex items-center w-full h-[30px] bg-white rounded-lg shadow-sm">
        <input
          className="w-full ml-2 bg-transparent outline-none text-sm font-medium placeholder-gray_maincolor hover:border-blue_maincolor focus:border-blue_maincolor"
          type="text"
          placeholder="Search"
        />
        <div className="flex items-center justify-center w-4 h-4 mx-2">
          <svg
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M13.969,14l-4.221,-4.2c-0.335,0.267 -0.721,0.478 -1.156,0.633c-0.436,0.156 -0.899,0.234 -1.391,0.234c-1.217,0 -2.247,-0.42 -3.091,-1.259c-0.843,-0.839 -1.264,-1.864 -1.264,-3.075c0,-1.211 0.421,-2.236 1.264,-3.075c0.844,-0.839 1.874,-1.258 3.091,-1.258c1.218,0 2.248,0.419 3.091,1.258c0.843,0.839 1.265,1.864 1.265,3.075c0,0.489 -0.078,0.95 -0.235,1.384c-0.156,0.433 -0.368,0.816 -0.636,1.15l4.221,4.2zM7.201,9.333c0.838,0 1.55,-0.291 2.136,-0.875c0.586,-0.583 0.88,-1.291 0.88,-2.125c0,-0.833 -0.294,-1.541 -0.88,-2.125c-0.586,-0.583 -1.298,-0.875 -2.136,-0.875c-0.837,0 -1.549,0.292 -2.136,0.875c-0.586,0.584 -0.879,1.292 -0.879,2.125c0,0.834 0.293,1.542 0.879,2.125c0.587,0.584 1.299,0.875 2.136,0.875z"
              fill="#9C9C9C"
            />
          </svg>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center mt-2">
      <img
        className="w-[32px] h-[32px] rounded-full object-cover"
        src={personalImg}
        alt="Employee"
      />
      <div className="flex-1 pb-[3px] ml-[5px]">
        <div className="flex flex-col items-start justify-start w-full">
          <p className="font-semibold text-[12px] leading-[12px] text-blue-700 whitespace-pre-wrap">
            Justin Carder
          </p>
          <p className="self-center mt-[-6px] ml-[109px] font-normal text-[10px] leading-[8px] text-blue-700 whitespace-pre-wrap">
            0.30
          </p>
        </div>
        <div className="flex flex-row items-center mt-[-3px]">
          <p className="font-normal text-[12px] mt-1 leading-[12px] whitespace-pre-wrap">
            I wanted to take....
          </p>
          <span className="w-2 h-2 bg-blue_maincolor rounded-full ml-[30px] mt-2"></span>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center mt-2">
      <img
        className="w-[32px] h-[32px] rounded-full object-cover"
        src={personalImg}
        alt="Employee"
      />
      <div className="flex-1 pb-[3px] ml-[5px]">
        <div className="flex flex-col items-start justify-start w-full">
          <p className="font-semibold text-[12px] leading-[12px] text-blue-700 whitespace-pre-wrap">
            Justin Carder
          </p>
          <p className="self-center mt-[-6px] ml-[109px] font-normal text-[10px] leading-[8px] text-blue-700 whitespace-pre-wrap">
            0.30
          </p>
        </div>
        <div className="flex flex-row items-center mt-[-3px]">
          <p className="font-normal text-[12px] mt-1 leading-[12px] whitespace-pre-wrap">
            I wanted to take....
          </p>
          <span className="w-2 h-2 bg-blue_maincolor rounded-full ml-[30px] mt-2"></span>
        </div>
      </div>
    </div>
  </div>

  </>

  )
}

export default InboxMessage
