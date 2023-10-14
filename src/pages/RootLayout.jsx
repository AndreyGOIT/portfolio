import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ScrollToTop from "react-scroll-to-top";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
    </div>
  );
};

export default RootLayout;
