import { useContext } from 'react';
import { AppContextType } from '../../@types/appTypes';
import AppContext from '../../contexts/AppProvider/AppContext';
import * as Styled from './styles';

export default function Header() {
	const { searchMovie, search } = useContext(AppContext) as AppContextType;

	return (
		<Styled.Container>
			<span>TMDB Api</span>
			<Styled.SearchBox
				value={search}
				onChange={(e) => searchMovie(e.target.value.toLowerCase())}
				type="search"
				placeholder="pesquise um filme"
			/>
		</Styled.Container>
	);
}
