import { IoSearchOutline } from "react-icons/io5";
import personal from "../../assets/Ellipse 45.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { useAppDispatch } from "../../app/store";
import { toogleInboxMessage } from "../../app/Slices/InboxMessage";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button";

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const toogleMessage = () => {
    dispatch(toogleInboxMessage());
  };
  const { i18n } = useTranslation();
  console.log(i18n.language);

  const changeLanguage = (lang: "en" | "tr") => {
    i18n.changeLanguage(lang); // تغيير اللغة
  };
  return (
<header className="p-4 z-50 w-full relative top-0 right-0 max-w-[100vw] left-0 pl-[30px] lg:pl-[250px]    ">
<div className="flex justify-between  items-center ">
        <div className="flex items-center">
          <div>
            <img
              className="w-10 h-10 border rounded-full hidden md:block"
              src={personal}
            />
          </div>

          <h2 className="text-blue_maincolor text-[18px] md:text-[26px] font-bold">
            {t("Welcome")}
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <div className=" w-[300px] gap-2 items-center border border-gray_maincolor rounded-full p-2 hidden md:flex">
            <IoSearchOutline />
            <input
              className="outline-none w-full"
              type="text"
              placeholder={t("search")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative cursor-pointer">
              <IoIosNotificationsOutline size={25} />
              <span className="w-2 h-2 bg-red-500 rounded-full top-0 right-0 absolute"></span>
            </div>
            <div
              className="relative block md:hidden cursor-pointer"
              onClick={toogleMessage}
            >
              <LuMessageCircle size={22} />

              <span className="w-2 h-2 bg-red-500 rounded-full top-0 right-0 absolute"></span>
            </div>
          </div>
        </div>
        <div>
          <Button
            className="bg-blue_maincolor"
            onClick={() => changeLanguage(i18n.language === "tr" ? "en" : "tr")}
          >
            {i18n.language === "tr" ? "English" : "Türkçe"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
