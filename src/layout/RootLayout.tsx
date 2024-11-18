import { Outlet } from "react-router-dom";
import SidePar from "../components/layout/SidePar";
import Navbar from "../components/layout/Navbar";

const RootLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="flex justify-between">
                <SidePar />
                <div className="w-full ml-[22px] md:ml-[250px]">
                    <Navbar />
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default RootLayout;
