import React, { useContext, useEffect } from 'react';

import { MdMovie } from 'react-icons/md';
import { InfinitySpin } from 'react-loader-spinner';
import { AppContextType } from '../@types/appTypes';
import Header from '../components/Header';
import Movie from '../components/Movie';
import RenderIf from '../components/RenderIf';
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
				<RenderIf isTrue={isLoading}>
					<InfinitySpin color="red" />
				</RenderIf>

				<RenderIf isTrue={hasMovies}>
					{
						filteredMovies.map((movie) => <Movie key={movie.id} {...movie} />)
					}
				</RenderIf>

				<RenderIf isTrue={!hasMovies && !!search}>
					<MdMovie />
					<p>Sem resultados para &#34;{search}&#34;</p>
				</RenderIf>
			</Styled.MoviesContainer>

			<RenderIf isTrue={isLoadingMoreMovies}>
				<InfinitySpin color="red" />
			</RenderIf>
		</Styled.HomeContainer>
	);
}
