import "./skills.css";
import { ReactComponent as JS } from "../../assets/skills/icons8-javascript.svg";
import { ReactComponent as TS } from "../../assets/skills/icons8-typescript.svg";
import { ReactComponent as React } from "../../assets/skills/icons8-react.svg";
import { ReactComponent as Html } from "../../assets/skills/icons8-html-5.svg";
import { ReactComponent as Css } from "../../assets/skills/icons8-css3.svg";
import { ReactComponent as Java } from "../../assets/skills/icons8-java.svg";
import { ReactComponent as Spring } from "../../assets/skills/icons8-spring-logo.svg";
import { ReactComponent as Kotlin } from "../../assets/skills/icons8-kotlin.svg";
import { ReactComponent as Oracle } from "../../assets/skills/icons8-oracle-logo.svg";
import { ReactComponent as Mongo } from "../../assets/skills/icons8-mongodb.svg";
import { ReactComponent as Aws } from "../../assets/skills/icons8-amazon-web-services.svg";

export const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h1>Skills</h1>
      </div>
      <div className="skills-content">
        <div className="skill-icons">
          <JS />
          <TS />
          <Html />
          <Css />
          <React />
        </div>
        <div className="skill-icons">
          <Java />
          <Kotlin />
          <Spring />
          <Oracle />
          <Mongo />
          <Aws />
        </div>
      </div>
    </div>
  );
};
