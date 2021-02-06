import React from "react";
import Card from "./Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ cards }) => {
  return (
    <>
      <ul className={styles.cards}>
        {cards.map(card => {
          const { src, title } = card;
          return <Card src={src} title={title} />;
        })}
      </ul>
    </>
  );
};

export default Cards;
