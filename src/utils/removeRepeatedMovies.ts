import type { MovieType } from '../@types/movieType';

export const removeRepeatedMovies = (moviesArray: MovieType[]) => {
	const newArray: MovieType[] = [];

	moviesArray.forEach((movie) => {
		if (!(newArray.find(({ id }) => id === movie.id))) {
			newArray.push(movie);
		}
	});

	return newArray;
};
