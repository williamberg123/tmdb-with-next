import styled, { css } from 'styled-components';

interface MoviesContainerType {
	isLoading: boolean;
	search: boolean;
	hasMovies: boolean;
}

export const HomeContainer = styled.div`
	& > svg {
		display: flex;
		margin: 20px auto;
	}
`;

export const MoviesContainer = styled.div<MoviesContainerType>`
	max-width: 1200px;
	padding: 100px 20px 20px;
	margin: auto;

	${({ isLoading, search, hasMovies }) => {
		return isLoading
		? (
			css`
				display: flex;
				justify-content: center;
			`
		)
		: (
			!!search && !hasMovies
			? css`
				display: flex;
				flex-direction: column;
				align-items: center;
				font-weight: bold;
				color: #333;
				font-size: 1.5rem;
				font-variant: small-caps;
				text-transform: lowercase;
				text-align: center;

				& svg {
					width: 100px;
					height: 100px;
				}
			`
			: css`
				display: grid;
				grid-gap: 20px;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		`
		);
	}}

	@media (max-width: 500px) {
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	}
`;

export const LoadMoreButton = styled.button`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px auto;
	padding: 10px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	background-image: linear-gradient(to right, red, orangered);
	font-weight: bold;
	color: white;

	&:hover {
		background-image: linear-gradient(to right, orangered, red);
	}
`;
