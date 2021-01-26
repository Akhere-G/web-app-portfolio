import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";

const Projects = ({ projects }) => {
  return (
    <ul className={styles.projects}>
      {projects.map((project, index) => {
        return <Project key={index} {...project} />;
      })}
    </ul>
  );
};

export default Projects;
