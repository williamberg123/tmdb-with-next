import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyles;
