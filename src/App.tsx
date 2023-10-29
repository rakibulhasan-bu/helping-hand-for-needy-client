import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";
import Footer from "./pages/shared/footer/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;