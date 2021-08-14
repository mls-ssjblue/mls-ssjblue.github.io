import "./skills.css";
import {ReactComponent as JS} from "../../assets/skills/icons8-javascript.svg";
import {ReactComponent as TS} from "../../assets/skills/icons8-typescript.svg";
import {ReactComponent as React} from "../../assets/skills/icons8-react.svg";
import {ReactComponent as Html} from "../../assets/skills/icons8-html-5.svg";
import {ReactComponent as Css} from "../../assets/skills/icons8-css3.svg";
import {ReactComponent as Java} from "../../assets/skills/icons8-java.svg";
import {ReactComponent as Spring} from "../../assets/skills/icons8-spring-logo.svg";
import {ReactComponent as Kotlin} from "../../assets/skills/icons8-kotlin.svg";
import {ReactComponent as Oracle} from "../../assets/skills/icons8-oracle-logo.svg";
import {ReactComponent as Mongo} from "../../assets/skills/icons8-mongodb.svg";
import {ReactComponent as Aws} from "../../assets/skills/icons8-amazon-web-services.svg";
import {ReactComponent as Svg1} from "../../assets/circle-spin.svg";

export const Skills = () => {
    const handleMouseMove = (e) => {

    }
    return (
        <>
            <div className="skills">
                {/*<div className="left-column-skills">*/}
                {/*</div>*/}
                <div className="skills-background">
                    <Svg1 className="svg-2"/>

                </div>
                <div className="skills-container">
                    <h1>Skills</h1>

                    <div className="skills-content">
                        <div className="skill-icons">
                            <JS className="skill-icon" onMouseMove={(ev) => handleMouseMove(ev)}/>
                            <TS className="skill-icon"/>
                            <Html className="skill-icon"/>
                            <Css className="skill-icon"/>
                            <React className="skill-icon"/>
                        </div>
                        <div className="skill-icons">
                            <Java className="skill-icon"/>
                            <Kotlin className="skill-icon"/>
                            <Spring className="skill-icon"/>
                            <Oracle className="skill-icon"/>
                            <Mongo className="skill-icon"/>
                            <Aws className="skill-icon"/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
