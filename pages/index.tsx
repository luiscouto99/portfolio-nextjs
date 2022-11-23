import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "../components/HeroSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useWindowYOffset } from "../hooks/useWindowYOffset/useWindowYOffset";

const Home: NextPage = () => {
	const pageYOffset = useWindowYOffset();

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
