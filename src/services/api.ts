import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org',
});

export const getMoviesList = async (page: number) => {
	const movies = await api.get(`/4/list/${page}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
	return movies.data.results;
};

export const getMovieInfo = async (movie_id: string) => {
	const movie = await api.get(`/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`);
	return movie.data;
};
