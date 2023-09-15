import { useContext } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { HiHome, HiOutlineNewspaper } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import { DashboardContext } from "../dashboardContext/DashboardContext";
import { FaListUl } from "react-icons/fa";
import { TbNewSection } from "react-icons/tb";
import { SiGooglenews } from "react-icons/si";

const LeftNavbar = () => {
    const { close, setClose, newsOpen, handleNews, appointmentOpen, handleAppointment } = useContext(DashboardContext);

    const location = useLocation();
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const handleClose = () => {
        if (!close) {
            setClose(true);
        }
    };

    const navLinks = [
        {
            label: "Dashboard",
            link: "/dashboard/admin-dashboard",
            icon: <BiSolidDashboard className={`text-lg cursor-pointer group-hover:text-primary ${isActive("/dashboard/admin-dashboard") ? 'text-primary' : 'text-primary/60'}`} />,
        },
        {
            label: "Appointments",
            handler: handleAppointment,
            state: appointmentOpen,
            icon: <LuCalendarDays className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />,
            children: [
                {
                    label: "Appointments List",
                    link: "/dashboard/appointments-list",
                    icon: <FaListUl className={`cursor-pointer group-hover:text-primary ${isActive("/dashboard/appointments-list") ? 'text-primary' : 'text-primary/60'}`} />,
                },
            ],
        },
        {
            label: "News & blog",
            handler: handleNews,
            state: newsOpen,
            icon: <HiOutlineNewspaper className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />,
            children: [
                {
                    label: "News & blog List",
                    link: "/dashboard/news-list",
                    icon: <HiOutlineNewspaper className={`cursor-pointer group-hover:text-primary ${isActive("/dashboard/news-list") ? 'text-primary' : 'text-primary/60'}`} />,
                },
                {
                    label: "Add news",
                    link: "/dashboard/add-news",
                    icon: <TbNewSection className={`cursor-pointer group-hover:text-primary ${isActive("/dashboard/add-news") ? 'text-primary' : 'text-primary/60'}`} />,
                },
                {
                    label: "Add news category",
                    link: "/dashboard/add-news-category",
                    icon: <SiGooglenews className={`cursor-pointer group-hover:text-primary ${isActive("/dashboard/add-news-category") ? 'text-primary' : 'text-primary/60'}`} />,
                },

            ],
        },
        {
            label: "Home",
            link: "/",
            icon: <HiHome className={`text-lg cursor-pointer group-hover:text-primary ${isActive("/") ? 'text-primary' : 'text-primary/60'}`} />,
        }
    ];

    return (
        <div onClick={handleClose} className={`h-[87dvh] overflow-y-auto bg-white py-4 space-y-4 rounded-tr-3xl myShadow w-full ${close ? "px-4" : "pl-2.5"}`}>
            {navLinks.map((singleLink, index) => (
                <div key={index}>
                    <NavLink to={singleLink?.link || ""}>
                        <div onClick={singleLink?.handler} className='flex items-center justify-between group cursor-pointer'>
                            <div className={`flex items-center ${close ? "gap-4" : ""}`}>
                                <div className='bg-primary/10 p-1.5 rounded'>
                                    {singleLink?.icon}
                                </div>
                                <p className={`font-medium select-none group-hover:text-primary ${isActive(singleLink?.link || "") ? 'text-primary' : 'text-primary/50'}`}>{close && singleLink?.label}</p>
                            </div>
                            {singleLink?.children && close && <IoIosArrowForward className={`text-lg font-medium text-primary/50 group-hover:text-primary ${singleLink?.state ? "rotate-90 transition-all duration-300" : " transition-all duration-300"}`} />}
                        </div>
                    </NavLink>
                    {singleLink?.children && singleLink?.state &&
                        <div className='pt-2'>
                            {singleLink?.children && singleLink?.state && (
                                singleLink?.children.map((singleChildren, childIndex) => (
                                    <NavLink to={singleChildren?.link} key={childIndex}>
                                        <div className='flex items-center gap-4 pt-2 pl-2 group cursor-pointer'>
                                            <div className='bg-primary/10 p-1 rounded'>
                                                {singleChildren?.icon}
                                            </div>
                                            <p className={`font-medium text-sm select-none group-hover:text-primary ${isActive(singleChildren?.link) ? 'text-primary' : 'text-primary/50'}`}>{close && singleChildren?.label}</p>
                                        </div>
                                    </NavLink>
                                ))
                            )}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};

export default LeftNavbar;
