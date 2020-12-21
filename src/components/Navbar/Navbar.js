import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { title: "home", slug: "" },
    { title: "about", slug: "/about" },
    { title: "contact", slug: "/contact" },
  ];
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <h3>Akhere Ihoeghinlan</h3>
      </Link>
      <ul
        className={`${styles.modal} ${
          open ? styles.openModal : styles.closeModal
        }`}
      >
        {links.map((link, index) => {
          console.log(pathname, link.slug);
          return (
            <li key={index}>
              <Link
                to={`${link.slug}`}
                className={`${pathname === link.slug ? "active" : ""}`}
              >
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

export default Navbar;
