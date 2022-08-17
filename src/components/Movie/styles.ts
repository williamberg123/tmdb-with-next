import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	cursor: pointer;
	transition: 0.4s;

	&:hover {
		transform: scale(1.05);
	}
`;

export const MoviePoster = styled.img`
	width: 100%;
	border-radius: 5px;
`;
