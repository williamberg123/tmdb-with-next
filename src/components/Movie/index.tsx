import Link from 'next/link';
import { useContext } from 'react';
import { AppContextType } from '../../@types/appTypes';
import { MovieType } from '../../@types/movieType';
import AppContext from '../../contexts/AppProvider/AppContext';
import * as Styled from './styles';

export default function Movie({ poster_path, id }: MovieType) {
	const { imageUrlw500 } = useContext(AppContext) as AppContextType;

	return (
		<Styled.Container>
			<Link href={`/movie/${encodeURIComponent(id)}`}>
				<Styled.MoviePoster src={`${imageUrlw500}${poster_path}`} />
			</Link>
		</Styled.Container>
	);
}
