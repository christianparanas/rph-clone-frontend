import React from 'react'

import styles from './landingheader.module.scss'

function LandingHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="">Nuke</div>
        <div className={styles.links_wrapper}>
          <a href="" className="">Login</a>
          <a href="" className="">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default LandingHeader;