import axios from 'axios';

export const getMoviesList = async () => {
	const movies = await axios.get(`https://api.themoviedb.org/4/list/1?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
	return movies.data.results;
};

export const getMovieInfo = async (movie_id: string) => {
	const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
	return movie.data;
};
