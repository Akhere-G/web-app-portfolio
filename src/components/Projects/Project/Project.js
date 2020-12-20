import React from "react";
import styles from "./Project.module.css";

const Project = ({ title, slug, url, img, desc, github, technologies }) => {
  return (
    <div className={styles.project}>
      <div id={slug} className={styles.target}></div>
      <header>
        <img src={img} alt={title} />
      </header>
      <footer>
        <h3>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.data}>
          <span>Url:</span>
          <a href={url} rel='noreferrer' target='_blank'>
            {url}
          </a>
        </div>
        <div className={styles.data}>
          <span>Github:</span>
          <a href={github} rel='noreferrer' target='_blank'>
            {github}
          </a>
        </div>

        <div className={styles.data}>
          <span>Technologies:</span>
          <p>{technologies.join(", ")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Project;
