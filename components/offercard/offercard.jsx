import React from "react";

import styles from "./offercard.module.scss";

export default function OfferCard({ props }) {
  return (
    <div className={styles.wrapper}>
      <img src={props.img} alt="offer" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
