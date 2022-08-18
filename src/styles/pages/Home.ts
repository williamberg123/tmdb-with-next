import styled from 'styled-components';

export const HomeContainer = styled.div`

`;

export const MoviesContainer = styled.div`
	max-width: 1200px;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	margin: auto;
	padding: 20px;
`;
