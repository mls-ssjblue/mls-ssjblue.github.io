import cs from "../../assets/companies/Credit_Suisse_Logo.png";
import singlife from "../../assets/companies/logo-singlife.png";
import aviva from "../../assets/companies/aviva logo transparent.svg";
import autodesk from "../../assets/companies/Autodesk_Logo.png";
import jfdi from "../../assets/companies/jfdi.png";
import "./experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="logos">
        <img src={singlife} className="singlife-logo" />
        <img src={aviva} className="aviva-logo" />
        <img src={cs} className="cs-logo" />
        <div className="second">
          <img src={autodesk} className="autodesk-logo" />
          <img src={jfdi} className="jfdi-logo" />
        </div>
      </div>
    </div>
  );
};
