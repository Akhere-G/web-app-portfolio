import React from "react";
import { Projects, ProjectLinks } from "../../components/";
import data from "../../data.js";
const Home = () => {
  const projectLinks = data.map(project => ({
    title: project.title,
    slug: project.slug,
  }));
  return (
    <>
      <section>
        <h2 className='section'>My Projects</h2>
        <ProjectLinks projectLinks={projectLinks} />
        <Projects projects={data} />
      </section>
    </>
  );
};

export default Home;
