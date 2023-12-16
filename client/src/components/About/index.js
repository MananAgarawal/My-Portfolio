import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";
import { SiMongodb } from "react-icons/si";
import { FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setletterClass] = useState("text-animate");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setletterClass("text-animate-hover");
        }, 2000);
        return () => {
            // Cleanup function to clear the timeout when the component unmounts or when the dependency changes
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
         <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
                        idx={10}
                    />
                </h1>
                <p>
                    I am a MERN stack developer skilled in MongoDB, Express.js, React.js,
                    and Node.js. My expertise spans both frontend and backend development,
                    allowing me to create seamless user experiences.
                </p>
                <p>
                    With proficiency in MongoDB, Express.js, React.js, and Node.js, I
                    specialize in full-stack development, delivering end-to-end solutions
                    across the software development lifecycle.
                </p>
                <p>
                    As a MERN stack developer, I bring a holistic approach to web
                    development, crafting versatile and high-performance applications with
                    MongoDB, Express.js, React.js, and Node.js.
                </p>
            </div>


            <div className="stage-cube-cont">
                <div className="cube-spinner">
                    <div className="face1">
                        <SiMongodb color="green" />
                    </div>
                    <div className="face2">
                        <FaReact color="cyan" />
                    </div>
                    <div className="face3">
                        <IoLogoNodejs color="green" />
                    </div>
                    <div className="face4">
                        <IoLogoJavascript color="yellow"/>
                    </div>
                    <div className="face5">
                        <FaGitAlt color="red" />
                    </div>
                    <div className="face6">
                        <FaSass color="pink" />
                    </div>
                </div>
            </div>
         </div>
         <Loader type="pacman" />
        </>
    );
};

export default About;
