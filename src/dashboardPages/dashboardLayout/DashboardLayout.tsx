import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DashboardContext } from "../dashboardContext/DashboardContext";
import LeftNavbar from "../leftNavbar/LeftNavbar";

const DashboardLayout = () => {
    const { close } = useContext(DashboardContext);
    return (
        <div className="flex gap-5">
            <div
                className={`${close
                    ? "w-1/6 transition-all duration-300"
                    : "w-12 transition-all duration-300"
                    } pt-5`}
            >
                <LeftNavbar />
            </div>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;