import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { MovieType } from '../../@types/movieType';
import { getMovieInfo } from '../../services/api';
import * as Styled from '../../styles/pages/MoviePage';

export default function MoviePage() {
	const [movie, setMovie] = useState<MovieType | null>(null);

	const params = useRouter();

	const getMovie = useCallback(async () => {
		const movieInfo = await getMovieInfo(`${params.query.movie_id}`);
		setMovie(movieInfo);
	}, [params.query.movie_id]);

	useEffect(() => {
		getMovie();
	}, [getMovie]);

	const imageUrl = `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`;

	return (
		<Styled.MoviePageContainer>
			{
				!movie && <InfinitySpin color="red" />
			}

			{
				!!movie && (
					<Styled.MovieInfo style={{ backgroundImage: imageUrl }}>
						<h1>{movie?.title}</h1>
						<span className="tagline">
							{movie?.tagline}

							<span className="age-and-genres">
								<Styled.AgeClassification isAdult={movie?.adult}>
									{movie?.adult ? '18' : 'L'}
								</Styled.AgeClassification>
								{
									movie?.genres.map(({ name }) => <span key={name}>{name}</span>)
								}
							</span>
						</span>
						<p>{movie?.overview}</p>
						<Styled.ShadowDiv />
					</Styled.MovieInfo>
				)
			}
		</Styled.MoviePageContainer>
	);
}
