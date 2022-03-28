import Head from "next/head";
import Image from "next/image";

import LandingHeader from "components/landingheader/landingheader";
import LandingHero from "components/landinghero/landinghero";

export default function Home() {
  return (
    <div className="">
      <LandingHeader />
      <LandingHero />
    </div>
  );
}
