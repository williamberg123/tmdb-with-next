import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AppContextType } from '../../@types/appTypes';
import { MovieType } from '../../@types/movieType';
import AppContext from '../../contexts/AppProvider/AppContext';
import { getMovieInfo } from '../../services/api';
import * as Styled from '../../styles/pages/MoviePage';

export default function MoviePage() {
	const [movie, setMovie] = useState<MovieType | null>(null);
	const { imageUrlOriginal } = useContext(AppContext) as AppContextType;

	const params = useRouter();

	const getMovie = async () => {
		const movieInfo = await getMovieInfo(`${params.query.movie_id}`);
		setMovie(movieInfo);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<Styled.MoviePageContainer>
			{
				!!movie && (
					<>
						<Styled.BackgroudImage src={`${imageUrlOriginal}${movie.backdrop_path}`} />
						<Styled.ShadowDiv />
						<Styled.MovieInfo>
							<h1>{movie.title}</h1>
							<span className="tagline">
								{movie.tagline}

								<span className="age-and-genres">
									<Styled.AgeClassification isAdult={movie.adult}>
										{movie.adult ? '18' : 'L'}
									</Styled.AgeClassification>
									{
										movie.genres.map(({ name }) => <span key={name}>{name}</span>)
									}
								</span>
							</span>
							<p>{movie.overview}</p>
						</Styled.MovieInfo>
					</>
				)
			}
		</Styled.MoviePageContainer>
	);
}
