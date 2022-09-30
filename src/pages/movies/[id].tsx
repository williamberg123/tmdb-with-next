import { useRouter } from 'next/router';
import { InfinitySpin } from 'react-loader-spinner';

import { MovieType } from '../../@types/movieType';
import * as Styled from '../../styles/pages/MoviePage';
import useApi from '../../hooks/useApi';

export default function MoviePage() {
	const { query } = useRouter();
	const urlPath = `/3/movie/${query.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`;

	const { data: movie } = useApi<MovieType>(urlPath);
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
