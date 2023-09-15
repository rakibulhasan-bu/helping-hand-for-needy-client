import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import DashboardMain from "../dashboardPages/DashboardMain";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardMain />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Home />,
            },
        ]
    },
]);