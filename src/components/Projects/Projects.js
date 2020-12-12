import React from "react";
import Project from "./Project/Project";
import styles from "./Projects.module.css";

const Projects = ({ projects }) => {
  return (
    <main className={styles.projects}>
      <ul className={styles.list}>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </ul>
    </main>
  );
};

export default Projects;
