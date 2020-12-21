import React, { useState, useEffect } from "react";
import styles from "./ProjectLinks.module.css";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

const ProjectLinks = ({ projectLinks }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
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
    <div className={`${styles.projectLinks} ${isMoving ? styles.moving : ""}`}>
      <ul
        className={`${styles.modal} ${
          open ? styles.openModal : styles.closeModal
        }`}
      >
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

      <div
        className={styles.toggleBtn}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default ProjectLinks;
