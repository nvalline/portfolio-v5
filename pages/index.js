import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';
import Bio from '../components/bio/bio';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';

import { projectData } from '../data/projects';
import { skillsList } from '../data/skills';

export default function Home({ projects, skills }) {
	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Nate Valline | Web Developer</title>
			</Head>

			{/* Hero Section */}
			<Hero />

			{/* Divider */}
			<Divider />

			{/* Bio Section */}
			<Bio skills={skills} />

			{/* Project Section */}
			<Work projects={projects} />

			{/* Contact Section */}
			<Contact />
		</>
	);
}

Home.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	return {
		props: {
			projects: projectData,
			skills: skillsList
		}
	};
}
