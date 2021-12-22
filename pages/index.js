import Head from 'next/head';
import { sanityClient } from '../sanity';

import Layout from '../components/Layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';
import Bio from '../components/bio/bio';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';

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

export async function getServerSideProps() {
	const projectsQuery = `*[_type == 'project' && active == true]`;
	const skillsQuery = `*[_type == 'skill']`;

	const projects = await sanityClient.fetch(projectsQuery);
	const skillArray = await sanityClient.fetch(skillsQuery);

	const skills = skillArray[0].skill;

	return {
		props: {
			projects,
			skills
		}
	};
}
