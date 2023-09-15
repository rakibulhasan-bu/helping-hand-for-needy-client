import { useContext } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { DashboardContext } from "../dashboardContext/DashboardContext";

const AdminNavbar = () => {
    const { close, setClose, handleClose } = useContext(DashboardContext);

    return (
        <div className='bg-white py-2 px-4 w-full flex items-center justify-between myShadow'>
            <div className={`flex items-center ${close ? "gap-10" : "gap-4"}`}>
                <Link to='/'>
                    <div className='flex items-center gap-2'>
                        <img className="h-10 w-10 object-cover" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693413583/Website-assets/LifeCare/lifecare_logo_ktasdt_yczkkh.png" alt="This is logo image" />
                        {close &&
                            <h3 className="font-bold text-2xl text-secondary select-none">Lifecare</h3>
                        }
                    </div>
                </Link>
                {
                    close ?
                        <RiMenuFoldLine onClick={handleClose} className="text-2xl text-primary/90 hover:text-primary cursor-pointer" /> :
                        <RiMenuUnfoldLine onClick={() => setClose(prev => (!prev))} className="text-2xl text-primary/90 hover:text-primary cursor-pointer" />
                }

            </div>
            {/* this is name and role img and setting div  */}
            <div className='flex items-center gap-2'>
                <div className=''>
                    <h3 className="text-primary font-semibold">Helping Hand</h3>
                    <p className="text-primary/50 text-sm">Admin</p>
                </div>
                <img className="w-10 h-10 object-cover rounded-lg" src="" alt="" />
            </div>
        </div>
    );
};

export default AdminNavbar;