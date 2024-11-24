import { Outlet } from "react-router-dom";
import SidePar from "../components/layout/SidePar";
import Navbar from "../components/layout/Navbar";
import InboxMessage from "../components/layout/InboxMessage";

const RootLayout = () => {
  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] min-h-screen overflow-x-hidden"
    >
      <SidePar />

      <div className="flex flex-col">
        <div className="w-full ml-[22px] md:ml-[200px]">
          <Navbar />
        </div>
        <div className="ml-[0px] md:ml-[220px]">
          <Outlet />
        </div>
      </div>

      <div className="ml-[0px] md:ml-[10px] mt-[100px] h-auto">
        <InboxMessage />
      </div>
    </div>
  );
};

export default RootLayout;
