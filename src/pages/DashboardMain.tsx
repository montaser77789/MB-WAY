import { TbCalendarClock } from "react-icons/tb";
import img from "../../src/assets/rb_2011 1.png";
import Button from "../components/shared/Button";
import { IoIosNotificationsOutline } from "react-icons/io";
import MyLineChart from "../components/charts/linechart";
import MyDonutChart from "../components/charts/CircleShart";

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
          </div>
        </div>
        <div className="col-span-2 bg-black">sdfg</div>
      </div>
    </div>
  );
};

export default DashboardMain;
