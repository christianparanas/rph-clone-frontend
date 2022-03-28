import Head from "next/head";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// import styles
import styles from "styles/home.module.scss";

// components
import LandingHeader from "components/landingheader/landingheader";
import LandingHero from "components/landinghero/landinghero";
import Page from "components/page/page";
import { Fragment } from "react";

const jobs = [
  [
    "HTML",
    "CSS",
    "Programming",
    "Mobile App",
    "Software Architecture",
    "UI / UX Design",
    "C++ Programming",
    "Computer Security",
    "eCommerce",
    "Debugging",
    "GitHub",
  ],
  [
    "HTML",
    "CSS",
    "Programming",
    "Mobile App",
    "Software Architecture",
    "UI / UX Design",
    "C++ Programming",
    "Computer Security",
    "eCommerce",
    "Debugging",
    "GitHub",
  ],
  [
    "HTML",
    "CSS",
    "Programming",
    "Mobile App",
    "Software Architecture",
    "UI / UX Design",
    "C++ Programming",
    "Computer Security",
    "eCommerce",
    "Debugging",
    "GitHub",
  ],
];

export default function Home() {
  return (
    <Page>
      <LandingHeader />
      <LandingHero />

      <div className={styles.marquee_container}>
        <div className={styles.marquee_wrapper}>
          <h1>You belong here</h1>
          <div className={styles.content}>
            {jobs.map((job, key) => {
              return (
                <Fragment key={key}>
                  <Marquee
                    speed={60}
                    gradient={false}
                    direction={key == 1 ? "left" : "right"}
                    pauseOnHover={true}
                    className={styles.mq}
                  >
                    {job.map((skill, idx) => {
                      return <h2 key={idx}>{skill}</h2>;
                    })}
                  </Marquee>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
