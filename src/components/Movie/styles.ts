import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	transition: 0.4s;
	animation: move 0.8s ease;
	aspect-ratio: 3/2;

	& span {
		text-align: center;
		margin-top: 10px;
		font-family: 'Rubik Distressed', cursive;
	}

	&:hover {
		transform: scale(1.05);
	}

	@media (max-width: 500px) {
		& span {
			font-size: 0.7rem;
		}
	}

	@keyframes move {
		0% {
			opacity: 0%;
			transform: translateY(-10px);
		}

		100% {
			opacity: 100%;
			transform: translateY(0px);
		}
	}
`;

export const MoviePoster = styled.img`
	width: 100%;
	border-radius: 5px;
`;
