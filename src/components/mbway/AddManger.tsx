import { useTranslation } from "react-i18next";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { FaPlus } from "react-icons/fa";

const AddManger = () => {
  const { t } = useTranslation();
  return (
    <>
      <div data-ignore="used only for top most containter width block">
        <div className="bg-[white] box-border flex justify-start items-stretch flex-col md:w-[920px] rounded-2xl">
          <div className="flex justify-between items-center flex-row gap-2 grow-0 shrink-0 basis-auto">
            <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
              <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>

              <p className=" text-xl font-bold leading-5 text-blue_maincolor grow-0 shrink-0 basis-auto ml-[7px] m-0 p-0">
                {t("quickAddition")}
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4 sm:flex-row sm:gap-[23px]">
              {/* Task */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  {t("task")}
                </p>
              </div>

              {/* Employee */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-blue_maincolor m-0 p-0">
                  {t("employee")}
                </p>
              </div>

              {/* Meeting */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  {t("meeting")}
                </p>
              </div>

              {/* Manager */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  {t("manager")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start flex-col md:flex-row flex-wrap md:gap-[79px] box-border mt-2 ">
            <div className="w-[100.00%] md:w-[70%]  grow-0 shrink-0 basis-auto box-border ">
              <div>
                <p className="  text-base font-bold leading-4 px-2 text-blue_maincolor my-2">
                  {t("personalInformation")}
                </p>
                <div className="flex md:flex-row flex-col gap-[15px]">
                  <div className="grow shrink w-full md:w-auto">
                    {/* Name Input */}
                    <div className="flex flex-col w-full  box-border mb-4">
                      <label
                        className="text-sm font-bold leading-[14px] text-blue_maincolor mb-2"
                        htmlFor="name"
                      >
                        {t("name")}
                      </label>
                      <Input
                        id="name"
                        placeholder="Brandon Levin Alfredo Vaccaro"
                        type="text"
                        className="border h-[50px] w-full rounded-lg px-2"
                      />
                    </div>

                    {/* National Number Input */}
                    <div className="flex flex-col w-full  box-border mb-4">
                      <label
                        className="text-sm font-bold leading-[14px] text-blue_maincolor mb-2"
                        htmlFor="nationalNumber"
                      >
                        {t("nationalNumber")}
                      </label>
                      <Input
                        id="nationalNumber"
                        placeholder="3020652148720147"
                        type="text"
                        className="border h-[50px] w-full rounded-lg px-2"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col w-full  box-border mb-4">
                      <label
                        className="text-sm font-bold leading-[14px] text-blue_maincolor mb-2"
                        htmlFor="email"
                      >
                        {t("email")}
                      </label>
                      <Input
                        id="email"
                        placeholder="ahmed122@gmail.com"
                        type="email"
                        className="border h-[50px] w-full rounded-lg px-2"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col w-full  box-border mb-4">
                      <label
                        className="text-sm font-bold leading-[14px] text-blue_maincolor mb-2"
                        htmlFor="phone"
                      >
                        {t("phone")}
                      </label>
                      <Input
                        id="phone"
                        placeholder="01247798410"
                        type="text"
                        className="border h-[50px] w-full rounded-lg px-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:w-[50%] w-full ">
                    {/* Birth of Date */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="birthdate"
                        className="text-base font-bold text-blue_maincolor"
                      >
                        {t("birthDate")}
                      </label>
                      <Input
                        id="birthdate"
                        type="date"
                        placeholder="2000-03-16"
                        className="border border-[#9c9c9c] bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3"
                      />
                    </div>

                    <div className="flex flex-row gap-4 ">
                      {/* Duration */}
                      <div className="flex flex-col w-[48%]">
                        <label
                          htmlFor="duration"
                          className="text-base font-bold text-blue_maincolor"
                        >
                          {t("duration")}
                        </label>
                        <Input
                          id="duration"
                          type="number"
                          placeholder="3"
                          className="border border-[#9c9c9c]  bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3"
                        />
                      </div>

                      {/* Years of Experience */}
                      <div className="flex flex-col w-[48%]">
                        <label
                          htmlFor="yearsOfExperience"
                          className="text-base font-bold text-blue_maincolor"
                        >
                          {t("yearsOfExperience")}
                        </label>
                        <Input
                          id="yearsOfExperience"
                          type="number"
                          placeholder="3"
                          className="border border-[#9c9c9c]  bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3"
                        />
                      </div>
                    </div>

                    {/* Contract Type */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="contractType"
                        className="text-base font-bold text-blue_maincolor"
                      >
                        {t("contractType")}
                      </label>
                      <Input
                        id="contractType"
                        type="text"
                        placeholder="Full time (on-site)"
                        className="border border-[#9c9c9c] bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3 placeholder-gray-400"
                      />
                    </div>

                    {/* Manager File */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="managerFile"
                        className="text-base font-bold text-blue_maincolor"
                      >
                        {t("managerFile")}
                      </label>
                      <Input
                        id="managerFile"
                        type="file"
                        placeholder=""
                        className="border border-[#9c9c9c] bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3 file:bg-blue_maincolor file:text-white file:rounded-md file:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col pb-[13px] w-full md:w-[20%] ">
              <div>
                <p className="text-base font-bold text-blue_maincolor m-0">
                  {t("functionalSpecialization")}
                </p>
                <div className="w-full box-border mt-4">
                  {[
                    { id: "medical", label: t("medical") },
                    { id: "tourism", label: t("tourism") },
                    { id: "engineering", label: t("engineering") },
                    { id: "commerce", label: t("commerce") },
                    { id: "real-estate", label: t("RealEstate") },
                    { id: "graphics", label: t("graphics") },
                  ].map(({ id, label }) => (
                    <div key={id} className="flex items-center mt-2">
                      {/* مربع الاختيار */}
                      <input
                        type="checkbox"
                        id={id}
                        className="peer h-6 w-6 border border-gray-400 rounded-[3px] flex items-center justify-center peer-checked:bg-blue_maincolor cursor-pointer"
                      />
                      <label
                        htmlFor={id}
                        className="flex items-center cursor-pointer"
                      >
                        {/* النص المصاحب */}
                        <span className="ml-3 text-lg font-semibold text-blue_maincolor">
                          {label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#0017c2] to-[#000b5c]  md:w-[186px] w-full text-nowrap h-14 mt-[52px] rounded-2xl flex items-center justify-center gap-3">
              <FaPlus />
                {t("addManager")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddManger;
