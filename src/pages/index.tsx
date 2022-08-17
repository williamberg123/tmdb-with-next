import { useContext } from 'react';
import { AppContextType } from '../@types/appTypes';
import Movie from '../components/Movie';
import AppContext from '../contexts/AppProvider/AppContext';
import * as Styled from '../styles/pages/Home';

export default function Home() {
	const { movies } = useContext(AppContext) as AppContextType;

	return (
		<Styled.HomeContainer>
			<Styled.MoviesContainer>
				{
					movies.map((movie) => <Movie key={movie.id} {...movie} />)
				}
			</Styled.MoviesContainer>
		</Styled.HomeContainer>
	);
}
