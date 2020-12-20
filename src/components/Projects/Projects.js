import React from "react";
import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <ul className='section'>
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </ul>
  );
};

export default Projects;
