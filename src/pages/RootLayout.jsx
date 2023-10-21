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
      <ScrollToTop
        smooth
        component={<b style={{ color: "gray", fontSize: "35px" }}>^</b>}
      />
    </div>
  );
};

export default RootLayout;
