import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/hero/hero';
import Divider from '../components/divider/divider';

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
		</Layout>
	);
}
