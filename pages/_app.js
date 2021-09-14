import { AppProvider } from '../context/main-context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />
		</AppProvider>
	);
}

export default MyApp;
