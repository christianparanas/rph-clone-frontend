import Head from "next/head";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Fragment } from "react";

// import styles
import styles from "styles/home.module.scss";

// components
import LandingHeader from "components/landingheader/landingheader";
import LandingHero from "components/landinghero/landinghero";
import Page from "components/page/page";
import OfferCard from "components/offercard/offercard";

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

const offers = [
  {
    img: "/icon.png",
    title: "Your time. Your rules.",
    description: "Have the work flexibility you’ve always wanted. Do the job anywhere at any time."
  },
  {
    img: "/icon.png",
    title: "Stay in the loop.",
    description: "Be in the know with your fellow Filipino freelancers in our private community."
  },
  {
    img: "/icon.png",
    title: "Chill transactions.",
    description: "No bidding. No negotiations. No job hunting. No competition over projects with others."
  },
  {
    img: "/icon.png",
    title: "Your money. All yours.",
    description: "Nuke.io guarantees it's 100% free for all freelancers - no hidden charges, just quality service!"
  },
  {
    img: "/icon.png",
    title: "24/7 Buddy",
    description: "We’re your BFF ready to help with your concerns and suggestions, 24/7!"
  },
  {
    img: "/icon.png",
    title: "Earn big. Earn quick.",
    description: "Set your rate and receive your payment ASAP."
  },

]

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

          <div className={styles.perks}>
            <p>WHY JOIN US?</p>
            <h1>Live your work dream</h1>
            <div className={styles.perks_content}>
              {offers.map((offer, key) => {
                return (
                  <OfferCard key={key} props={offer} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
