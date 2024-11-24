import { TbCalendarClock } from "react-icons/tb";
import img from "../../src/assets/rb_2011 1.png";
import Button from "../components/shared/Button";
import { IoIosNotificationsOutline } from "react-icons/io";
import MyLineChart from "../components/charts/linechart";
import MyDonutChart from "../components/charts/CircleShart";
import AddMangerAndEmplyee from "../components/mbway/AddManger&&emplyee";
import { useTranslation } from "react-i18next";

const DashboardMain = () => {
  const { t } = useTranslation();



  return (
    <div className="  container">

        <div className="flex flex-wrap gap-4">
  {/* البطاقة الأولى */}
  <div className="lg:w-[calc(50%-0.5rem)] w-full rounded-md border border-gray_maincolor shadow-sm px-4 py-4">
    <div className="flex ju  items-center gap-2 mb-4">
      <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
      <p className="text-blue_maincolor font-bold">{t("almostFinished")}</p>
    </div>
    <div className="flex justify-between items-center gap-4 text-blue_maincolor">
      <div className="flex-1">
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("deadline")} :{" "}
          <span className="font-medium">18/12/2024</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("section")} :{" "}
          <span className="font-medium">commerce</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("employee")} :{" "}
          <span className="font-medium">Justin Carder</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("manager")} :{" "}
          <span className="font-medium">Justin Carder</span>
        </p>
      </div>
      <div className="">
        <img
          src={img}
          alt="Employee"
          className=" object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="w-full flex gap-2 justify-center mt-4">
      <Button className="text-nowrap px-4 lg:px-3 xl:px-4 " variant={"outline"}>
        <TbCalendarClock size={20} className="mr-2" /> {t("remindLater")}
      </Button>
      <Button className="text-nowrap px-4 lg:px-3 xl:px-4 " variant={"default"}>
        <IoIosNotificationsOutline className="mr-2" size={20} />{" "}
        {t("employeeAlert")}
      </Button>
    </div>
  </div>

  {/* البطاقة الثانية */}
  <div className="lg:w-[calc(50%-0.5rem)] w-full rounded-md border border-gray_maincolor shadow-sm px-4 py-4">
    <div className="flex ju  items-center gap-2 mb-4">
      <span className="w-2 h-2 bg-blue_maincolor rounded-full"></span>
      <p className="text-blue_maincolor font-bold">{t("almostFinished")}</p>
    </div>
    <div className="flex justify-between items-center gap-4 text-blue_maincolor">
      <div className="flex-1">
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("deadline")} :{" "}
          <span className="font-medium">18/12/2024</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("section")} :{" "}
          <span className="font-medium">commerce</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("employee")} :{" "}
          <span className="font-medium">Justin Carder</span>
        </p>
        <p className="font-bold text-[16px] text-nowrap mb-3">
          {t("manager")} :{" "}
          <span className="font-medium">Justin Carder</span>
        </p>
      </div>
      <div className="">
        <img
          src={img}
          alt="Employee"
          className=" object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="w-full flex gap-2 justify-center mt-4">
      <Button className="text-nowrap px-4 lg:px-3 xl:px-4 " variant={"outline"}>
        <TbCalendarClock size={20} className="mr-2" /> {t("remindLater")}
      </Button>
      <Button className="text-nowrap px-4 lg:px-3 xl:px-4 " variant={"default"}>
        <IoIosNotificationsOutline className="mr-2" size={20} />{" "}
        {t("employeeAlert")}
      </Button>
    </div>
  </div>
</div>



<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
  {/* العنصر الأول: MyLineChart */}
  <div className="col-span-12 md:col-span-8 shadow-md p-2 rounded-md">
    <MyLineChart />
  </div>

  {/* العنصر الثاني: MyDonutChart */}
  <div className="col-span-12 md:col-span-4 shadow-md p-2 rounded-md">
    <MyDonutChart />
  </div>
</div>




              <AddMangerAndEmplyee />
        </div>

     

  );
};

export default DashboardMain;
