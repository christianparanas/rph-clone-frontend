import React from 'react'
import Link from 'next/link';

import styles from './landingheader.module.scss'

function LandingHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="">Nuke</div>
        <div className={styles.links_wrapper}>
          <Link href="/login" className="">Login</Link>
          <Link href="/signup" className="">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingHeader;