import { Outlet } from "react-router-dom";
import SidePar from "../components/layout/SidePar";
import Navbar from "../components/layout/Navbar";
import InboxMessage from "../components/layout/InboxMessage";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar for mobile screens */}
        <div className="col-span-12 lg:col-span-2">
          <SidePar />
        </div>
        
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-8">
          <Outlet />
        </div>

        {/* Inbox message for larger screens */}
        <div className="col-span-12 lg:col-span-2">
          <InboxMessage />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
