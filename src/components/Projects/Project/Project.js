import React, { useEffect, useState, useRef } from "react";
import styles from "./Project.module.css";

const Project = ({ title, slug, url, img, desc, github, technologies }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);
  const show = styles.popIn;
  const hide = styles.popOut;

  useEffect(() => {
    const checkIsVisible = () => {
      if (projectRef) {
        const rect = projectRef.current.getBoundingClientRect();
        const projectTop = rect.top + 100;
        const height = window.innerHeight;
        if ((projectTop => 0) && projectTop <= height) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    checkIsVisible();
    window.addEventListener("scroll", checkIsVisible);

    return () => {
      window.removeEventListener("scroll", checkIsVisible);
    };
  }, []);

  return (
    <div
      className={`${styles.project} ${isVisible ? show : hide}`}
      ref={projectRef}
      name={slug}
    >
      <div id={slug} className={styles.target}></div>
      <header>
        <img src={img} alt={title} />
      </header>
      <footer>
        <h3>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.data}>
          <span>Url</span>
          <a href={url} rel='noreferrer' target='_blank'>
            {url}
          </a>
        </div>
        <div className={styles.data}>
          <span>Github</span>
          <a href={github} rel='noreferrer' target='_blank'>
            {github}
          </a>
        </div>

        <div className={styles.data}>
          <span>Technologies</span>
          <p>{technologies.join(", ")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Project;
