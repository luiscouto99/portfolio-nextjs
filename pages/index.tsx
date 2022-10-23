import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "./Home/components/HeroSection";
import ProjectSection from "./Home/components/ProjectSection";
import AboutSection from "./Home/components/AboutSection";
import ScrollToTop from "../components/ScrollToTop";

const Home: NextPage = () => {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setPageYOffset(window.pageYOffset));

    return () => {
      window.removeEventListener("scroll", () =>
        setPageYOffset(window.pageYOffset)
      );
    };
  }, [pageYOffset]);

  return (
    <>
      <Head>
        <title>Luis Couto - Frontend Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ScrollToTop pageYOffset={pageYOffset} />
      <ProjectSection pageYOffset={pageYOffset} />
      <AboutSection pageYOffset={pageYOffset} />
    </>
  );
};

export default Home;
