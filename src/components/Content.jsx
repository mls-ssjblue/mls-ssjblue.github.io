import { Intro } from "./intro/Intro";
import { About } from "./About";
import { Experience } from "./Experience";
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
