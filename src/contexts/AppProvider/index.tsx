import { useCallback, useEffect, useMemo, useState } from 'react';

import { AppContextType, AppProviderType } from '../../@types/appTypes';
import AppContext from './AppContext';
import { MovieType } from '../../@types/movieType';
import { getMoviesList } from '../../services/api';

export default function AppProvider({ children }: AppProviderType) {
	const [ movies, setMovies ] = useState<MovieType[]>([]);
	const [ search, setSearch ] = useState('');
	const [ page, setPage ] = useState(1);
	const imageUrlOriginal = 'https://image.tmdb.org/t/p/original';
	const imageUrlw500 = 'https://image.tmdb.org/t/p/w500';

	const getMovies = useCallback(async () => {
		const moviesList = await getMoviesList(page);
		setMovies([ ...movies, ...moviesList ]);
	}, [page]);

	const searchMovie = useCallback((value: string) => {
		setSearch(value);
		scrollTo(0, 0);
	}, []);

	const loadMoreMovies = useCallback(() => {
		setPage((s) => s + 1);
	}, []);

	useEffect(() => {
		getMovies();
	}, [page, getMovies]);

	const filteredMovies = search
	? movies.filter((movie) => movie.title.toLowerCase().includes(search))
	: movies;

	const context = useMemo<AppContextType>(() => ({
		imageUrlOriginal, imageUrlw500, movies, search, searchMovie, filteredMovies, loadMoreMovies,
	}), [movies, search, searchMovie, filteredMovies, loadMoreMovies]);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
