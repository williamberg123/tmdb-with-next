import { useEffect, useMemo, useState } from 'react';

import { AppContextType, AppProviderType } from '../../@types/appTypes';
import AppContext from './AppContext';
import { MovieType } from '../../@types/movieType';
import { getMoviesList } from '../../services/api';

export default function AppProvider({ children }: AppProviderType) {
	const [ movies, setMovies ] = useState<MovieType[]>([]);
	const imageUrlOriginal = 'https://image.tmdb.org/t/p/original';
	const imageUrlw500 = 'https://image.tmdb.org/t/p/w500';

	const getMovies = async () => {
		const moviesList = await getMoviesList();
		setMovies(moviesList);
	};

	useEffect(() => {
		getMovies();
	}, []);

	const context = useMemo<AppContextType>(() => ({
		imageUrlOriginal, imageUrlw500, movies,
	}), [movies]);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
