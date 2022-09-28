import Link from 'next/link';
import { memo, useContext } from 'react';
import { AppContextType } from '../../@types/appTypes';
import { MovieType } from '../../@types/movieType';
import AppContext from '../../contexts/AppProvider/AppContext';
import * as Styled from './styles';

function Movie({ poster_path, id, title }: MovieType) {
	const { imageUrlw500 } = useContext(AppContext) as AppContextType;

	return (
		<Styled.Container>
			<Link href={`/movies/${encodeURIComponent(id)}`}>
				<Styled.MoviePoster src={`${imageUrlw500}${poster_path}`} />
			</Link>
			<span>{title}</span>
		</Styled.Container>
	);
}

export default memo(Movie);
