import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import HeroSection from './Home/components/HeroSection'
import ProjectSection from './Home/components/ProjectSection'
import CustomCursor from '../components/CustomCursor'

const Home: NextPage = () => {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setPageYOffset(window.pageYOffset));

    return () => {
      window.removeEventListener("scroll", () => setPageYOffset(window.pageYOffset))
    };
  }, [pageYOffset]);

  //console.log(pageYOffset);


  return (
    <>
      <Head>
        <title>Luis Couto - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ProjectSection pageYOffset={pageYOffset} />
    </>
  )
}

export default Home
