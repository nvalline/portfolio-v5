import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				{/* Page Title */}
				<title>Nate Valline | Web Developer</title>
			</Head>

			<div>
				<h1>Nate Valline Portfolio v. 5</h1>
			</div>
		</Layout>
	);
}
