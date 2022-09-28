import { useContext, useEffect } from 'react';

import { MdMovie } from 'react-icons/md';
import { InfinitySpin } from 'react-loader-spinner';
import { AppContextType } from '../@types/appTypes';
import Header from '../components/Header';
import Movie from '../components/Movie';
import AppContext from '../contexts/AppProvider/AppContext';
import * as Styled from '../styles/pages/Home';

export default function Home() {
	const { filteredMovies, search, isLoadingMoreMovies, loadMoreMovies } = useContext(AppContext) as AppContextType;
	const hasMovies = Boolean(filteredMovies.length);

	// for is loading, dont must have movies and dont must have a searched value
	const isLoading = !hasMovies && !search;

	useEffect(() => {
		window.addEventListener('scroll', loadMoreMovies);

		return () => {
			window.removeEventListener('scroll', loadMoreMovies);
		};
	}, [loadMoreMovies]);

	return (
		<Styled.HomeContainer>
			<Header />

			<Styled.MoviesContainer hasMovies={hasMovies} search={!!search} isLoading={isLoading}>
				{
					isLoading && (<InfinitySpin color="red" />)
				}

				{
					hasMovies && filteredMovies.map((movie) => <Movie key={movie.id} {...movie} />)
				}

				{
					(!hasMovies && !!search) && (
						<>
							<MdMovie />
							<p>Sem resultados para &#34;{search}&#34;</p>
						</>
					)
				}
			</Styled.MoviesContainer>

			{
				isLoadingMoreMovies && <InfinitySpin color="red" />
			}
		</Styled.HomeContainer>
	);
}
