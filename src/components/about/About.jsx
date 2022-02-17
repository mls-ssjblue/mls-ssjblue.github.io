import "./about.css";
import {ReactComponent as Svg} from "../../assets/circle-spin-3.svg";

export const About = () => {
    return (

        <div className="about">
            <div className="left-column-about" />
            <div className="about-content">
                <div className="about-text">
                    <h1>About me</h1>
                    I am a full stack engineer and lead with experience working in different industries ranging from banking to
                    startups.
                    I have worked on building web applications across both the front end and back end. I am constantly
                    looking to challenge myself with a growth mindset and build some cool stuff!
                    <div style={{display: "flex", alignItems: "center"}}><p className="quote">"Stay hungry. Stay
                        foolish"</p> - Steve Jobs</div>

                </div>
                <div className="rick-pic">
                </div>
            </div>
            <div className="about-background">
                <Svg className="svg-1"/>
            </div>
        </div>
    );
};
