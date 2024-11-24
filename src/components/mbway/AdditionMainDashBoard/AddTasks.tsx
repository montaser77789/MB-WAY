import { useState, useEffect } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import img from "../../../assets/Ellipse 79@2x.png";
import Button from "../../shared/Button";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const imagesFromDatabase = [img, img, img];

const AddTasks = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const taskStartDate = new Date("11-12-2024");
    const taskEndDate = new Date("12-12-2024");

    const calculateProgress = () => {
      const now = new Date(); // Current date and time
      const totalDuration = taskEndDate.getTime() - taskStartDate.getTime();
      const timeRemaining = taskEndDate.getTime() - now.getTime();
      const newProgress = Math.max(
        0,
        Math.min(100, ((totalDuration - timeRemaining) / totalDuration) * 100)
      );

      setProgress(newProgress);
    };

    const interval = setInterval(calculateProgress, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
        <div className="text-bkue_maincolor shadow-lg p-2 border border-gray_maincolor rounded-lg">
          <h2 className="text-blue_maincolor font-bold">
            Medical supplies project
          </h2>
          <div className="flex items-center gap-2">
            <MdOutlineSubdirectoryArrowRight className="text-blue_maincolor" />
            <span className="text-[#3371EB] text-[14px] font-inter font-medium leading-[14px] break-words">
              Medical
            </span>
          </div>

          <div className="relative mt-2 flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2">
              {imagesFromDatabase.slice(0, 2).map((imgSrc, index) => (
                <div className="relative w-6 h-6">
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Task ${index + 1}`}
                    className={`absolute ${
                      index % 2 === 0 ? "z-10 top-0  right-0" : "left-[-19px]"
                    } w-full h-full object-cover rounded-full`}
                  />
                </div>
              ))}
            </div>
            <div className="text-blue_maincolor bg-gray_maincolor px-2 py-1 rounded-3xl text-[8px] font-inter font-medium leading-[8px] break-words">
              30 Days left
            </div>
          </div>

          {/* شريط التقدم */}
          <div className="flex justify-between mt-2 items-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue_maincolor h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="ml-2 text-blue_maincolor text-xs font-medium">
              {Math.round(progress)}%
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div>
              <p className="text-blue_maincolor font-bold">
                From:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>

            <div>
              <p className="text-blue_maincolor font-bold">
                To:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-bkue_maincolor shadow-lg p-2 border border-gray_maincolor rounded-lg">
          <h2 className="text-blue_maincolor font-bold">
            Medical supplies project
          </h2>
          <div className="flex items-center gap-2">
            <MdOutlineSubdirectoryArrowRight className="text-blue_maincolor" />
            <span className="text-[#3371EB] text-[14px] font-inter font-medium leading-[14px] break-words">
              Medical
            </span>
          </div>

          <div className="relative mt-2 flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2">
              {imagesFromDatabase.slice(0, 2).map((imgSrc, index) => (
                <div className="relative w-6 h-6">
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Task ${index + 1}`}
                    className={`absolute ${
                      index % 2 === 0 ? "z-10 top-0  right-0" : "left-[-19px]"
                    } w-full h-full object-cover rounded-full`}
                  />
                </div>
              ))}
            </div>
            <div className="text-blue_maincolor bg-gray_maincolor px-2 py-1 rounded-3xl text-[8px] font-inter font-medium leading-[8px] break-words">
              30 Days left
            </div>
          </div>

          {/* شريط التقدم */}
          <div className="flex justify-between mt-2 items-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue_maincolor h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="ml-2 text-blue_maincolor text-xs font-medium">
              {Math.round(progress)}%
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div>
              <p className="text-blue_maincolor font-bold">
                From:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>

            <div>
              <p className="text-blue_maincolor font-bold">
                To:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-bkue_maincolor shadow-lg p-2 border border-gray_maincolor rounded-lg">
          <h2 className="text-blue_maincolor font-bold">
            Medical supplies project
          </h2>
          <div className="flex items-center gap-2">
            <MdOutlineSubdirectoryArrowRight className="text-blue_maincolor" />
            <span className="text-[#3371EB] text-[14px] font-inter font-medium leading-[14px] break-words">
              Medical
            </span>
          </div>

          <div className="relative mt-2 flex justify-between items-center">
            <div className="flex justify-start items-center space-x-2">
              {imagesFromDatabase.slice(0, 2).map((imgSrc, index) => (
                <div className="relative w-6 h-6">
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Task ${index + 1}`}
                    className={`absolute ${
                      index % 2 === 0 ? "z-10 top-0  right-0" : "left-[-19px]"
                    } w-full h-full object-cover rounded-full`}
                  />
                </div>
              ))}
            </div>
            <div className="text-blue_maincolor bg-gray_maincolor px-2 py-1 rounded-3xl text-[8px] font-inter font-medium leading-[8px] break-words">
              30 Days left
            </div>
          </div>

          {/* شريط التقدم */}
          <div className="flex justify-between mt-2 items-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue_maincolor h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="ml-2 text-blue_maincolor text-xs font-medium">
              {Math.round(progress)}%
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <div>
              <p className="text-blue_maincolor font-bold">
                From:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>

            <div>
              <p className="text-blue_maincolor font-bold">
                To:
                <span className="text-[#3371EB] text-[12px]">12/12/2023</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <Button className="bg-gradient-to-r from-[#0017c2] to-[#000b5c]  md:w-[186px] w-full text-nowrap h-14 mt-[52px] rounded-2xl flex items-center justify-center gap-3">
          <FaPlus />
          {t("addTask")}
        </Button>
      </div>
    </div>
  );
};

export default AddTasks;
