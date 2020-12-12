import React from "react";
import styles from "./Home.module.css";
import { Projects } from "../../components/";
import data from "../../data.js";
const Home = () => {
  return (
    <div>
      <section className='section'>
        <h3>My Projects</h3>
        <Projects projects={data} />
      </section>
    </div>
  );
};

export default Home;
