import { useTranslation } from "react-i18next";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { FaPlus } from "react-icons/fa";
const AddEmployee = () => {
    const { t } = useTranslation();
  return (
    <div className="flex justify-between items-start flex-col md:flex-row flex-wrap md:gap-[79px] box-border mt-2 p-2">
    <div className="w-[100.00%] md:w-[65%]  grow-0 shrink-0 basis-auto box-border px-1 ">
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
                
                className="border border-[#9c9c9c] bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3 file:bg-blue_maincolor file:text-white file:rounded-md file:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col pb-[13px] w-full md:w-[22%] ">
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

      <div className="flex justify-end w-full">
        <Button className="bg-gradient-to-r  from-[#0017c2] to-[#000b5c]  md:w-[200px] w-full text-nowrap h-14 mt-[52px] rounded-2xl flex items-center justify-center gap-3">
          <FaPlus />
          {t("addEmployee")}
        </Button>
      </div>
    </div>
  </div>
  )
}

export default AddEmployee
