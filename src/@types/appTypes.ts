import { ReactNode } from 'react';
import { MovieType } from './movieType';

export interface AppProviderType {
	children: ReactNode;
}

export interface AppContextType {
	imageUrlOriginal: string;
	imageUrlw500: string;
	movies: MovieType[];
}
