import React from "react";
const dets = { dets: "title, url, img, desc, info, github, technologies" };
//import Project from "./Project";
const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => {
        return <div>{JSON.stringify(project)}</div>;
      })}
    </ul>
  );
};

export default Projects;
