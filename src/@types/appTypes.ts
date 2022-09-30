import { ReactNode } from 'react';
import { MovieType } from './movieType';

export interface AppProviderType {
	children: ReactNode;
}

export interface AppContextType {
	imageUrlOriginal: string;
	imageUrlw500: string;
	filteredMovies: MovieType[];
	search: string;
	// eslint-disable-next-line
	searchMovie: (value: string) => void;
	loadMoreMovies: () => void;
	isLoadingMoreMovies: boolean;
}
