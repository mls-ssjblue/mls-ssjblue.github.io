import "./intro.css";
import mls from "../../assets/mls-removebg-preview.png"
export const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-content">
                <div className="text-content">
                    <div>
                        <h4>Hi, my name is</h4>
                    </div>
                    <div>
                        <h1>Susheel</h1>
                    </div>
                    <div>
                        <h2>I'm a software engineer</h2>
                    </div>
                    <div>
                        <h3>I build things and tackle complex problems</h3>
                    </div>
                </div>
                <div className="img-content">
                    <svg version="1.1" width="0" height="0">
                        <filter id="gaussian-blur">
                            <feComposite
                                operator='over'
                                in='shadow'
                                in2='SourceGraphic'
                            />
                        </filter>
                    </svg>
                </div>
            </div>
        </div>
);
};
