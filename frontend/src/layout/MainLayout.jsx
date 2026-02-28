import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;