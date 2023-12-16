import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
const Projects = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const [data, setData] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5001/projects", {
                    method: "GET",
                });

                const result = await response.json();
                console.log(result);

                // Check if the component is still mounted before updating the state
                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                console.error("Error While Fetching Projects");
            }
        };

        // Call the async function
        fetchData();

        // Cleanup function to set isMounted to false when the component is unmounted
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setletterClass('text-animate-hover');
        }, 3000);
        return () => {
          // Cleanup function to clear the timeout when the component unmounts or when the dependency changes
          clearTimeout(timeoutId);
        };
      }, []);
    


    return (
            <div className="mainproject">
                <div className="heading">
                    <h2>
                         <AnimatedLetters compoclass="Projectscompo" letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']}  idx={9}/>
                    </h2>
                    <div className="underline">
                       ___________________________________ 
                    </div>
                </div>
                    <Indiproj projects={data} />
            </div>
    );
}

const Indiproj = ({ projects }) => {
    // Access the projects array from the object
    const projectArray = projects.projects || [];
        
    return (
        <div className="projectscontainer">  
            {projectArray.map((project) => (
                <span key={project._id}>
                    <button data-tooltip={project.description || ''} className="projectbutton" onClick={() => window.open(`${project.link}`, '_blank')}>
                        <span className="projectname">
                            {project.name}
                        </span>
                    </button>
                </span>
            ))}
        </div>
    );
};


export default Projects;