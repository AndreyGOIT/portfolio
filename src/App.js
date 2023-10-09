import HardSkills from "./components/HardSkills";
import Header from "./components/Header";
import SoftSkills from "./components/SoftSkills";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NextGoals from "./components/NextGoals";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />

      <Header />
      <Hero />
      <HardSkills />
      <SoftSkills />
      <Carousel />
      <NextGoals />
      <Footer />
    </>
  );
}

export default App;
