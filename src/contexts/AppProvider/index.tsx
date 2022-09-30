import { useCallback, useEffect, useMemo, useState } from 'react';

import { AppContextType, AppProviderType } from '../../@types/appTypes';
import AppContext from './AppContext';
import { MovieType } from '../../@types/movieType';
import { getMoviesList } from '../../services/api';
import { removeRepeatedMovies } from '../../utils/removeRepeatedMovies';

export default function AppProvider({ children }: AppProviderType) {
	const [ movies, setMovies ] = useState<MovieType[]>([]);
	const [ search, setSearch ] = useState('');
	const [ page, setPage ] = useState(1);
	const [ isLoadingMoreMovies, setIsLoadingMoreMovies ] = useState(false);
	const imageUrlOriginal = 'https://image.tmdb.org/t/p/original';
	const imageUrlw500 = 'https://image.tmdb.org/t/p/w500';

	const getMovies = useCallback(async () => {
		const moviesList = await getMoviesList(page);
		const moviesWithoutRepeat = removeRepeatedMovies([ ...movies, ...moviesList ]);
		setMovies(moviesWithoutRepeat);
		setIsLoadingMoreMovies(false);
	}, [page, movies]);

	const searchMovie = useCallback((value: string) => {
		setSearch(value);
		scrollTo(0, 0);
	}, []);

	const loadMoreMovies = useCallback(() => {
		const isScrolled = document.body.clientHeight <= window.scrollY + window.innerHeight;

		if (isScrolled && !search && !isLoadingMoreMovies) {
			setIsLoadingMoreMovies(true);
			setPage((s) => s + 1);
		}
	}, [search, isLoadingMoreMovies]);

	useEffect(() => {
		getMovies();
		// eslint-disable-next-line
	}, [page]);

	const filteredMovies = search.length
	? movies.filter((movie) => movie.title.toLowerCase().includes(search))
	: movies;

	const context = useMemo<AppContextType>(() => ({
		imageUrlOriginal, imageUrlw500, search, searchMovie, filteredMovies, loadMoreMovies, isLoadingMoreMovies,
	}), [search, searchMovie, filteredMovies, loadMoreMovies, isLoadingMoreMovies]);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
