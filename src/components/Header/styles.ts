import styled from 'styled-components';

export const Container = styled.header`
	font-family: 'Rubik Distressed', cursive;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	background-color: black;
	padding: 20px;
	color: white;
	z-index: 3;
	font-variant: small-caps;
	text-transform: lowercase;
	font-size: 1.5rem;
`;

export const SearchBox = styled.input`
	padding: 7px 10px;
	font-size: 1rem;
	background-color: #222;
	border: none;
	border-radius: 3px;
	color: white;
`;
