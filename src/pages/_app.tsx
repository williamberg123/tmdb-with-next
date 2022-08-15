import type { AppProps } from 'next/app';
import AppProvider from '../contexts/AppProvider';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Component {...pageProps} />
			<GlobalStyles />
		</AppProvider>
	);
}

export default MyApp;
