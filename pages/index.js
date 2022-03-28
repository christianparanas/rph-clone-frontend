import Head from "next/head";
import Image from "next/image";

import LandingHeader from "components/landingheader/landingheader";
import LandingHero from "components/landinghero/landinghero";
import Page from "components/page/page";

export default function Home() {
  return (
    <Page>
      <LandingHeader />
      <LandingHero />

      <div className="">
        
      </div>
    </Page>
  );
}
