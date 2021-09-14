import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/hero/hero';

export default function Home() {
	return (
		<Layout>
			<Head>
				{/* Page Title */}
				<title>Nate Valline | Web Developer</title>
			</Head>

			<Hero />
		</Layout>
	);
}
