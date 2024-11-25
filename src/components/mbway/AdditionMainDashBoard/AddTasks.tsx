import { useState, useEffect } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import img from "../../../assets/Ellipse 79@2x.png";
import Button from "../../shared/Button";
import { FaPlus, FaRegClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Modal from "../../shared/Modal";
import { TbXboxX } from "react-icons/tb";
import Input from "../../shared/Input";
import Textarea from "../../shared/TextArea";

const imagesFromDatabase = [img, img, img];

const AddTasks = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
                    className={`absolute z-40 ${
                      index % 2 === 0 ? " top-0  right-0" : "left-[-19px]"
                    } w-full h-full object-cover rounded-full`}
                    style={{ zIndex: 30 }}
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
                      index % 2 === 0 ? " top-0  right-0" : "left-[-19px]"
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
                      index % 2 === 0 ? " top-0  right-0" : "left-[-19px]"
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
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#0017c2] to-[#000b5c]  md:w-[186px] w-full text-nowrap h-14 mt-[52px] rounded-2xl flex items-center justify-center gap-3"
        >
          <FaPlus />
          {t("addTask")}
        </Button>
      </div>

      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="flex justify-between">
          <p className="titles">Add new Task</p>
          <TbXboxX
            className="titles cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <form className="flex flex-col space-y-2 z-50">
          <div className="flex flex-col space-y-2 mt-3">
            <label className="label">Task Heading</label>
            <Input type="text" className="p-2" placeholder="Monthly mask" />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="label">Section</label>
            <Input type="text" className="p-2" placeholder="Medical" />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="label">Task description</label>
            <Textarea
              className="h-[150px]"
              placeholder="The meeting was focused on discussing the progress of ongoing projects and addressing any challenges faced by the team. Key updates were shared by each department, and important decisions were made to ensure timely completion of tasks.Action items were assigned, and the next meeting was scheduled for follow-up."
            />
          </div>

          {/* <div className="border border-gray_maincolor rounded-md py-2">
            <div className="flex items-center gap-2 p-2 border-b border-b-gray_maincolor">
              <FaRegClock className="label" />

              <span className="label">Date & Time</span>
            </div>

            <div className="flex flex-col space-y-2 mt-4 px-3">
              <label className="label">Meeting date</label>
              <Input className="p-2" placeholder="19/11/2024" />
            </div>

            <div className="flex flex-row items-center gap-4 mt-4 overflow-x-auto px-3">
              <div className="flex flex-col space-y-2 w-[48%]">
                <label className="label">From</label>
                <Input className="p-2" placeholder="9.5 PM" />
              </div>
              <div className="flex flex-col space-y-2 w-[47%]">
                <label className="label">To</label>
                <Input className="p-2" placeholder="10.5 PM" />
              </div>
            </div>
          </div> */}

          <div className="border border-gray_maincolor rounded-md py-2 space-y-2">
            <div className="flex items-center gap-2 p-2 border-b border-b-gray_maincolor">
              <FaRegClock className="label" />

              <span className="label">Date & Time</span>
            </div>

            <div className="flex flex-col space-y-2 mt-4 px-3">
              <label className="label">Meeting date</label>
              <Input className="p-2" placeholder="19/11/2024" />
            </div>

              <div className="flex flex-col space-y-2 px-3 mt-2">
                <label className="label">From</label>
                <Input className="p-2" placeholder="9.5 PM" />
              </div>
              <div className="flex flex-col space-y-2 px-3">
                <label className="label">To</label>
                <Input className="p-2" placeholder="10.5 PM" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant={"outline"}>Cancel</Button>
            <Button>Save</Button>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default AddTasks;
