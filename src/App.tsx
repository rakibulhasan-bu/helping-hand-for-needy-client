import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./pages/shared/navbar/Navbar";
import Footer from "./pages/shared/footer/Footer";

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;