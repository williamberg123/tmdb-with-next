import styled from 'styled-components';

export const MoviePageContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: black;
`;

export const MovieInfo = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	color: white;
	z-index: 5;
	padding: 20px;

	& h1 {
		font-family: 'Rubik Distressed', cursive;
		font-size: 3rem;
		color: red;
	}

	& > span {
		display: flex;
		align-items: center;
		margin: 20px 0;
	}

	& span.tagline {
		font-size: 1.7rem;
		color: #bcbcbc;
		margin: 10px 0;
		font-variant: small-caps;
	}

	& span.age-and-genres {
		display: flex;
		align-items: center;
		color: white;
		font-size: 1.2rem;
		font-family: 'Rubik Distressed', cursive;

		& > span {
			margin-right: 20px;
			text-transform: lowercase;
		}
	}

	& p {
		font-size: 1.4rem;
		margin: 50px 0;
		text-indent: 3rem;
		line-height: 2;
	}
`;

export const BackgroudImage = styled.img`
	width: 100%;
	position: fixed;
`;

export const ShadowDiv = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.6);
`;

export const AgeClassification = styled.div<{ isAdult: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background-color: ${
	({ isAdult }) => isAdult ? 'black' : 'green'};
	border-radius: 5px;
	font-size: 0.8rem;
	font-weight: bold;
	font-variant: normal;
	font-family: 'Roboto', sans-serif;
	text-transform: none;
	margin: 0 50px;
`;
