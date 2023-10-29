import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import DashboardMain from "../dashboardPages/DashboardMain";
import Contact from "../pages/contactPage/Contact";
import AboutPage from "../pages/about/AboutPage";
import Causes from "../pages/causes/Causes";
import Donate from "../pages/donate/Donate";
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
            {
                path: '/causes',
                element: <Causes />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/donate',
                element: <Donate />,
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