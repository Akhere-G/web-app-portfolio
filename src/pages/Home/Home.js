import React from "react";
import { Projects, ProjectLinks } from "../../components/";
import data from "../../data.js";
const Home = () => {
  const projectLinks = data.map(project => ({
    title: project.title,
    slug: project.slug,
  }));
  return (
    <div>
      <section className='section'>
        <h3>My Projects</h3>
        <ProjectLinks projectLinks={projectLinks} />
        <Projects projects={data} />
      </section>
    </div>
  );
};

export default Home;
