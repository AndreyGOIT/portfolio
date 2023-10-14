import Hero from "../components/Hero";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";
import { items, SliderCss } from "../components/SliderCss";
import NextGoals from "../components/NextGoals";

const Main = () => {
  return (
    <>
      <Hero />
      <HardSkills />
      <SoftSkills />
      <SliderCss items={items} />
      <NextGoals />
    </>
  );
};
export default Main;
