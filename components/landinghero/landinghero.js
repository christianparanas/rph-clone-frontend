import React from "react";

import styles from "./landinghero.module.scss";

function LandingHero() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Work your way</h1>
        <h4>Claim your unique nuke link</h4>

        <div className={styles.claim_link_wrapper}>
          <p>nuke.io/</p>
          <input type="text" placeholder="username" />
          <button>Claim username</button>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
