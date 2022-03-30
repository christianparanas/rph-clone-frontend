import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { Fragment } from "react";

// import styles
import styles from "styles/login.module.scss";

// components
import Page from "components/page/page";
import { Google, Facebook, LinkedIn, Email } from "components/icons";

export default function Login() {
  return (
    <Page>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <h1>Welcome back</h1>

            <div className={styles.providers}>
              <div className={styles.provider}>
                <Facebook />
                Login with Facebook
              </div>
              <div className={styles.provider}>
                <Google />
                Login with Google
              </div>
              <div className={styles.provider}>
                <LinkedIn />
                Login with LinkedIn
              </div>
              <div className={styles.provider}>
                <Email />
                Login with Email
              </div>
            </div>

            <div className={styles.signup_wrapper}>
              No account? <Link href="/signup"><span>Sign up</span></Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
