import { ReactNode } from 'react';
import { MovieType } from './movieType';

export interface AppProviderType {
	children: ReactNode;
}

export interface AppContextType {
	imageUrlOriginal: string;
	imageUrlw500: string;
	movies: MovieType[];
	filteredMovies: MovieType[];
	search: string;
	searchMovie: (value: string) => void;
	loadMoreMovies: () => void;
	isLoadingMoreMovies: boolean;
}
