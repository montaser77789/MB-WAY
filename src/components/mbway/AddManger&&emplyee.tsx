import { useTranslation } from "react-i18next";
import AddManger from "./AdditionMainDashBoard/AddManger";
import { act, useState } from "react";
import AddEmployee from "./AdditionMainDashBoard/AddEmployee";
import AddTasks from "./AdditionMainDashBoard/AddTasks";
import Addmeeting from "./AdditionMainDashBoard/Addmeeting";


const AddMangerAndEmplyee = () => {
  const { t } = useTranslation();
  const [ activeTab, setActiveTab ] = useState("meeting");
  return (
    <>
      <div  className=" shadow-lg p-2 border border-gray_maincolor rounded-lg mt-10">
        <div className="bg-[white] box-border flex justify-start items-stretch flex-col  rounded-2xl w-full ">
          <div className="flex justify-between items-center flex-row gap-2 grow-0 shrink-0 basis-auto">
            <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
              <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>

              <p className=" text-xl font-bold leading-5 text-blue_maincolor grow-0 shrink-0 basis-auto ml-[7px] m-0 p-0 cursor-pointer" >
                {t("quickAddition")}
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4 sm:flex-row sm:gap-[23px]">
              {/* Task */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p onClick={() => setActiveTab("task")} className={`text-base font-bold leading-4 ${activeTab === "task" ? "text-blue_maincolor" : "text-[#9c9c9c]"} m-0 p-0 cursor-pointer`} >
                  {t("task")}
                </p>
              </div>

              {/* Employee */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p onClick={() => setActiveTab("employee")} className={`text-base font-bold leading-4 ${activeTab === "employee" ? "text-blue_maincolor" : "text-[#9c9c9c]"} m-0 p-0 cursor-pointer`}>
                  {t("employee")}
                </p>
              </div>

              {/* Meeting */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p onClick={() => setActiveTab("meeting")} className={`text-base font-bold leading-4 ${activeTab === "meeting" ? "text-blue_maincolor" : "text-[#9c9c9c]"} m-0 p-0 cursor-pointer`}>
                  {t("meeting")}
                </p>
              </div>

              {/* Manager */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p  onClick={() => setActiveTab("manager")} className={`text-base font-bold leading-4 ${activeTab === "manager" ? "text-blue_maincolor" : "text-[#9c9c9c]"} m-0 p-0 cursor-pointer`}>
                  {t("manager")}
                </p>
              </div>
            </div>
          </div>

        { activeTab === "manager" &&  <AddManger />}

          { activeTab === "employee" &&  <AddEmployee />}

          { activeTab === "task" &&  <AddTasks />}
          {activeTab === "meeting" && <Addmeeting />}




          
        </div>
      </div>
    </>
  );
};

export default AddMangerAndEmplyee;
