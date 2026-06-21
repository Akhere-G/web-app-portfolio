import { useState, useEffect } from "react";
import styles from "./ProjectLinks.module.css";
import { Menu } from "lucide-react";


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
            <button className={styles.projectLink} key={index} onClick={() => {
              const el = document.getElementById(link.slug)
              if (el) {
                el.scrollIntoView({behavior: "smooth"})
              }
            }}>

                {link.title}

            </button>
          );
        })}
      </ul>

      <div
        className={styles.navbarBtn}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        <Menu />
      </div>
    </div>
  );
};

export default ProjectLinks;
