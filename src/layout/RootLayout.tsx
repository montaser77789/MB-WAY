import { Outlet } from "react-router-dom";
import SidePar from "../components/layout/SidePar";


const RootLayout = () => {
    return (
        <div>
            <SidePar />
            <Outlet />
        </div>
    );
}

export default RootLayout