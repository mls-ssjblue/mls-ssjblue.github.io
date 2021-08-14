import "./intro.css";
import mls from "../../assets/mls-removebg-preview.png"
import {ReactComponent as Svg} from "../../assets/binary.svg";
import {useEffect} from "react";
import {findDOMNode} from "react-dom";
export const Intro = () => {

    return (
        <div className="intro">
            <div className="left-column-intro"/>
            <div className="intro-content">
                <div className="text-content">
                    <div>
                        <h4>Hi, I am</h4>
                    </div>

                        <h1 className="name">Susheel</h1>

                    <div>
                        <h2>I'm a software engineer</h2>
                    </div>
                    <div>
                        <h3>I design solutions to tackle the industry's problems.</h3>
                    </div>
                </div>
                <div className="img-content">
                </div>
            </div>
            {/*<div className="intro-background">*/}
            {/*</div>*/}

        </div>
);
};
