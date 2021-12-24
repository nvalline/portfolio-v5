import Head from 'next/head';
import { sanityClient } from '../sanity';
import { urlFor } from '../sanity';

import Layout from '../components/layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';
import Bio from '../components/bio/bio';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';

export default function Home({ projects, seo, skills }) {
	const seo_og_img_url = urlFor(seo.og_image).url();
	const seo_twitter_img_url = urlFor(seo.twitter_image).url();

	return (
		<>
			<Head>
				{/* Page Title */}
				<title>{seo.page_title}</title>
				{/* Page Description */}
				<meta name='description' content={seo.page_desc} />
				<meta name='keywords' content={seo.page_keywords} />
				{/* Open Graph Protocol */}
				<meta property='og:title' content={seo.og_title} />
				<meta property='og:type' content={seo.og_type} />
				<meta name='og:image' property='og:image' content={seo_og_img_url} />
				<meta property='og:url' content={seo.og_url} />
				<meta property='og:description' content={seo.page_desc} />
				{/* Twitter Card */}
				<meta name='twitter:card' content={seo.twitter_card} />
				<meta name='twitter:creator' content={seo.twitter_creator} />
				<meta name='twitter:title' content={seo.twitter_title} />
				<meta name='twitter:description' content={seo.page_desc} />
				<meta name='twitter:image' content={seo_twitter_img_url} />
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
	const projectsQuery = `*[_type == 'project' && active == true]`;
	const skillsQuery = `*[_type == 'skill']`;
	const seoQuery = `*[_type == 'seo']`;

	const projects = await sanityClient.fetch(projectsQuery);
	const seoData = await sanityClient.fetch(seoQuery);
	const skillArray = await sanityClient.fetch(skillsQuery);

	const seo = seoData[0];
	const skills = skillArray[0].skill;

	return {
		props: {
			projects,
			seo,
			skills
		}
	};
}
