import React from "react";
import styles from "./Card.module.css";

const Card = ({ src, title }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={title} />
    </div>
  );
};

export default Card;
