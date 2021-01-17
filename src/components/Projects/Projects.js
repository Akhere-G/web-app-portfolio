import React from "react";
import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <ul
      className='section'
      style={{
        "overflow-x": "hidden",
      }}
    >
      {projects.map((project, index) => {
        return (
          <Project key={index} {...project} slideInRight={index % 2 === 0} />
        );
      })}
    </ul>
  );
};

export default Projects;
