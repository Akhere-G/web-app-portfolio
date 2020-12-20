import React, { useState, useEffect } from "react";
import styles from "./ProjectLinks.module.css";
import { Link } from "react-scroll";
const ProjectLinks = ({ projectLinks }) => {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsMoving(true);
      } else {
        setIsMoving(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <ul className={`${styles.projectLinks} ${isMoving ? styles.moving : ""}`}>
      {projectLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link to={`${link.slug}`} smooth={true} duration={1000}>
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectLinks;
