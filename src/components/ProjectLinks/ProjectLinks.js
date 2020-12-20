import React from "react";
import Styles from "./ProjectLinks.module.css";
import { Link } from "react-scroll";
const ProjectLinks = ({ projectLinks }) => {
  return (
    <ul className={Styles.projectLinks}>
      {projectLinks.map((link, index) => {
        return (
          <li key={index}>
            <Link to={`${link.slug}`} smooth={true} duration={1000}>
              {link.slug}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectLinks;
