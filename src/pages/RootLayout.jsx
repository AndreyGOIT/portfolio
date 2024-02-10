import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component

import ScrollToTop from "react-scroll-to-top"; // Import ScrollToTop component

// RootLayout component
const RootLayout = () => {
  return (
    <div>
      <Header /> {/* Render Header component */}
      <Outlet /> {/* Render child routes */}
      <Footer /> {/* Render Footer component */}
      {/* ScrollToTop component */}
      <ScrollToTop
        smooth // Enable smooth scrolling
        component={<b style={{ color: "gray", fontSize: "35px" }}>^</b>} // Customize scroll-to-top button
      />
    </div>
  );
};

export default RootLayout; // Export RootLayout component
