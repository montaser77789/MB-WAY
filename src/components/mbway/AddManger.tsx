import Button from "../shared/Button";
import Input from "../shared/Input";

const AddManger = () => {
  return (
    <>
      <div data-ignore="used only for top most containter width block">
        <div className="bg-[white] box-border flex justify-start items-stretch flex-col md:w-[920px] rounded-2xl">
          <div className="flex justify-between items-center flex-row gap-2 grow-0 shrink-0 basis-auto">
            <div className="flex justify-start items-center flex-row grow-0 shrink-0 basis-auto">
              <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>

              <p className=" text-xl font-bold leading-5 text-blue_maincolor grow-0 shrink-0 basis-auto ml-[7px] m-0 p-0">
                Quick addition
              </p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4 sm:flex-row sm:gap-[23px]">
              {/* Task */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  Task
                </p>
              </div>

              {/* Employee */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-blue_maincolor m-0 p-0">
                  Employee
                </p>
              </div>

              {/* Meeting */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  Meeting
                </p>
              </div>

              {/* Manager */}
              <div className="flex items-center gap-2 sm:gap-[3px]">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-base font-bold leading-4 text-[#9c9c9c] m-0 p-0">
                  Manager
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start flex-col md:flex-row flex-wrap md:gap-[79px] box-border mt-2 ">
            <div className="w-[100.00%] md:w-[70%]  grow-0 shrink-0 basis-auto box-border ">
              <div>
                <p className="  text-base font-bold leading-4 text-blue_maincolor m-0 p-0">
                  Personal information
                </p>
                <div className="flex md:flex-row flex-col gap-[15px]">
                  <div className="grow shrink w-full md:w-auto">
                    {/* Name Input */}
                    <div className="flex flex-col w-full  box-border mb-4">
                      <label
                        className="text-sm font-bold leading-[14px] text-blue_maincolor mb-2"
                        htmlFor="name"
                      >
                        Name
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
                        National Number
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
                        Email
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
                        Phone
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
                        Birth of Date
                      </label>
                      <input
                        id="birthdate"
                        type="date"
                        defaultValue="2000-03-16"
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
                          Duration
                        </label>
                        <input
                          id="duration"
                          type="number"
                          defaultValue="5"
                          className="border border-[#9c9c9c]  bg-white text-sm font-bold text-gray-700 rounded-lg h-12 px-3"
                        />
                      </div>

                      {/* Years of Experience */}
                      <div className="flex flex-col w-[48%]">
                        <label
                          htmlFor="yearsOfExperience"
                          className="text-base font-bold text-blue_maincolor"
                        >
                          Years of Experience
                        </label>
                        <input
                          id="yearsOfExperience"
                          type="number"
                          defaultValue="3"
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
                        Contract Type
                      </label>
                      <input
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
                        Manager File
                      </label>
                      <input
                        id="managerFile"
                        type="file"
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
                  Functional Specialization
                </p>
                <div className="w-full box-border mt-4">
                  {[
                    { id: "medical", label: "Medical" },
                    { id: "tourism", label: "Tourism" },
                    { id: "engineering", label: "Engineering" },
                    { id: "commerce", label: "Commerce" },
                    { id: "real-estate", label: "Real Estate" },
                    { id: "graphics", label: "Graphics" },
                  ].map(({ id, label }) => (
                    <div key={id} className="flex items-center mt-2">
                      {/* مربع الاختيار */}
                      <input
                        type="checkbox"
                        id={id}
                        className="peer h-6 w-6 border border-gray-400 rounded-[3px] flex items-center justify-center peer-checked:bg-blue_maincolor"
                      />
                      {/* التسمية مع ربطها بمربع الاختيار */}
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
                <div className="w-6 h-6 text-[#d9d9d9]">...</div>
                Add Manager
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddManger;
