import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';
import Bio from '../components/bio/bio';
import Work from '../components/work/work';
import Contact from '../components/contact/contact';

export default function Home() {
	return (
		<Layout>
			<Head>
				{/* Page Title */}
				<title>Nate Valline | Web Developer</title>
			</Head>

			{/* Hero Section */}
			<Hero />

			{/* Divider */}
			<Divider />

			{/* Bio Section */}
			<Bio />

			{/* Project Section */}
			<Work />

			{/* Contact Section */}
			<Contact />
		</Layout>
	);
}
