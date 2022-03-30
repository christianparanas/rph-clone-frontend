import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

// import styles
import styles from "styles/signup.module.scss";

// components
import Page from "components/page/page";
import { Google, Facebook, LinkedIn, Email } from "components/icons";

export default function SignUp() {
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <h1>Join NUKE.IO</h1>

            <div className={styles.claim_link_wrapper}>
              <p className={styles.header}>Claim your unique Nuke.io link</p>
              <p className={styles.prefix}>nuke.io/</p>
              <input type="text" placeholder="username" />
            </div>

            <div className={styles.providers}>
              <div className={styles.provider}>
                <Facebook />
                Sign up with Facebook
              </div>
              <div className={styles.provider}>
                <Google />
                Sign up with Google
              </div>
              <div className={styles.provider}>
                <LinkedIn />
                Sign up with LinkedIn
              </div>
              <div className={styles.provider}>
                <Email />
                Sign up with Email
              </div>
            </div>

            <div className={styles.login_wrapper}>
              Already have an account?{" "}
              <Link href="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
