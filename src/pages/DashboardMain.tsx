import { TbCalendarClock } from "react-icons/tb";
import img from "../../src/assets/rb_2011 1.png";
import Button from "../components/shared/Button";
import { IoIosNotificationsOutline } from "react-icons/io";
import MyLineChart from "../components/charts/linechart";
import MyDonutChart from "../components/charts/CircleShart";
import personalImg from "../../src/assets/Ellipse 38.png";
import AddManger from "../components/mbway/AddManger";

const DashboardMain = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="gap-3 md:grid md:grid-cols-12 grid-cols-1 p-1">
        <div className="md:col-span-10 col-span-12">
          <div className="flex flex-wrap gap-2">
            <div className="md:w-[calc(50%-0.5rem)] w-full rounded-md border border-gray_maincolor shadow-sm px-3 py-2">
              <div className="flex items-center gap-2 p-2">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-blue_maincolor font-bold">Almost finished</p>
              </div>
              <div className="flex items-center gap-2 p-2 text-blue_maincolor">
                <div className="w-full">
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Deadline :{" "}
                    <span className="font-medium break-words">18/12/2024</span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Section :{" "}
                    <span className="font-medium break-words">commerce</span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Employee :{" "}
                    <span className="font-medium break-words">
                      Justin Carder
                    </span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Manager :{" "}
                    <span className="font-medium break-words">
                      Justin Carder
                    </span>
                  </p>
                </div>
                <div className="md:w-[calc(50%-0.5rem)] w-3/4">
                  <img src={img} />
                </div>
              </div>
              <div className="w-full flex gap-2 justify-center">
                <Button className="text-nowrap" variant={"outline"}>
                  <TbCalendarClock size={20} /> Remind later
                </Button>
                <Button className="text-nowrap" variant={"default"}>
                  <IoIosNotificationsOutline size={20} /> Employee alert
                </Button>
              </div>
            </div>

            <div className="md:w-[calc(50%-0.5rem)] w-full rounded-md border border-gray_maincolor shadow-sm px-3 py-2">
              <div className="flex items-center gap-2 p-2">
                <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
                <p className="text-blue_maincolor font-bold">Almost finished</p>
              </div>
              <div className="flex items-center gap-2 p-2 text-blue_maincolor">
                <div className="w-full">
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Deadline :{" "}
                    <span className="font-medium break-words">18/12/2024</span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Section :{" "}
                    <span className="font-medium break-words">commerce</span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Employee :{" "}
                    <span className="font-medium break-words">
                      Justin Carder
                    </span>
                  </p>
                  <p className="font-bold text-[16px] text-nowrap break-words mb-3">
                    Manager :{" "}
                    <span className="font-medium break-words">
                      Justin Carder
                    </span>
                  </p>
                </div>
                <div className="md:w-[calc(50%-0.5rem)] w-3/4">
                  <img src={img} />
                </div>
              </div>
              <div className="w-full flex gap-2 justify-center">
                <Button className="text-nowrap" variant={"outline"}>
                  <TbCalendarClock size={20} /> Remind later
                </Button>
                <Button className="text-nowrap" variant={"default"}>
                  <IoIosNotificationsOutline size={20} /> Employee alert
                </Button>
              </div>
            </div>
          </div>
          <div className="gap-3 md:grid md:grid-cols-12 grid-cols-1 p-1 mt-2">
            <div className="md:col-span-9 w-full  scrollbar-thumb-blue_maincolor sidebar-scrollbar  z-10 shadow-md p-2 rounded-md">
              <MyLineChart />
            </div>
            <div className="md:col-span-3 h-full  z-10 shadow-md rounded-md w-full">
              <MyDonutChart />
            </div>
            <AddManger />
          </div>
        </div>
        {/* fixed bg-white min-h-screen  z-10  */}
        <div className="col-span-2 shadow-md rounded-md p-1  ">
          <div className="box-border flex flex-col items-stretch justify-center h-[86px] border-b-4 border-gray-400 ">
            <div className="flex flex-row items-center justify-start">
              <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
              <p className="ml-1 text-[16px] font-bold leading-[16px] text-blue_maincolor ">
                Inbox message
              </p>
            </div>
            <div className="flex flex-row items-center justify-start mt-[26px]">
              <div className="box-border flex flex-col items-stretch justify-center w-[85px]">
                <p className="text-center text-[16px] font-bold leading-[16px] text-blue-700 cursor-pointer">
                  Manager
                </p>
                <div className="mt-[8.5px] border-t-4 border-blue-700" />
              </div>
              <div className="box-border flex flex-col items-stretch justify-center w-[85px] ml-[13px]">
                <p className="text-center text-[16px] font-bold leading-[16px] text-gray-400 cursor-pointer">
                  Employee
                </p>
                <div className="mt-[8.5px] border-t-4 border-gray-400" />
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
      </div>
    </div>
  );
};

export default DashboardMain;
