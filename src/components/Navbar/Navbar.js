import React from "react";
import styles from "./Navbar.module.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbarCenter}>
        <div>
          <h4>
            <Link to='/'>Akhere Ihoeghinlan</Link>
          </h4>
        </div>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarLink}>
            <Link to='/'>home</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link to='/about'>about</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
