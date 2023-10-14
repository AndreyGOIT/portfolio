// import HardSkills from "./components/HardSkills";
// import Header from "./components/Header";
// import SoftSkills from "./components/SoftSkills";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import NextGoals from "./components/NextGoals";

// import ScrollToTop from "react-scroll-to-top";
// import { items, SliderCss } from "./components/SliderCss";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>

    // <>
    //   <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />

    //   <Header />
    //   <Hero />
    //   <HardSkills />
    //   <SoftSkills />
    //   <SliderCss items={items} />
    //   <NextGoals />
    //   <Footer />
    // </>
  );
}

export default App;
