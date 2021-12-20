import Footer from './footer/footer';
import Header from './header/header';

function Layout({ children }) {
	return (
		<>
			{/* HEADER CONTENT */}
			<Header />

			{/* MAIN CONTENT */}
			<main>{children}</main>

			{/* FOOTER CONTENT */}
			<Footer />
		</>
	);
}

export default Layout;
