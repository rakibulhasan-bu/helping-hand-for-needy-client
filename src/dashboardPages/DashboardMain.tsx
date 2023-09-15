import AdminNavbar from "./adminNav/AdminNavbar";
import DashboardContextProvider from "./dashboardContext/DashboardContext";
import DashboardLayout from "./dashboardLayout/DashboardLayout";

const DashboardMain = () => {
    return (
        <DashboardContextProvider>
            <div className='w-screen h-screen overscroll-auto dashboard-bg'>
                <AdminNavbar />
                <DashboardLayout />
            </div>
        </DashboardContextProvider>
    );
};

export default DashboardMain;