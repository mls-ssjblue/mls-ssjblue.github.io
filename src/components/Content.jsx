import { Intro } from "./intro/Intro";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import {Skills} from "./Skills";

export const Content = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <Skills />
    </div>
  );
};
