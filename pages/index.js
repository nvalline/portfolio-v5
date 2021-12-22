import Head from 'next/head';
import { sanityClient } from '../sanity';

import Layout from '../components/Layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';
import Bio from '../components/bio/bio';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';

export default function Home({ projects, skills }) {
	// const metaDescription =
	// 	'NV Marketing, LLC provides website design services for small business. Website design packages include design & development and SEO to increase traffic';

	return (
		<>
			<Head>
				{/* Page Title */}
				<title>Nate Valline | Web Developer</title>
				{/* Page Description */}
				<meta name='description' content={metaDescription} />
				<meta
					name='keywords'
					content='website designer, website design, website developer, website developer, seo, freelance, web builder'
				/>
				{/* Open Graph Protocol */}
				<meta property='og:title' content='Nate Valline' />
				<meta property='og:type' content='website' />
				{/* <meta
					name='og:image'
					property='og:image'
					content='https://nv-marketing.com/images/og/og_website_image_fb.jpg'
				/>
				<meta property='og:url' content='https://nv-marketing.com' /> */}
				<meta property='og:description' content={metaDescription} />
				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@Nate_Valline' />
				<meta name='twitter:title' content='Nate Valline' />
				<meta name='twitter:description' content={metaDescription} />
				{/* <meta
					name='twitter:image'
					content='https://nv-marketing.com/images/og/og_website_image_twitter.png'
				/> */}
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
