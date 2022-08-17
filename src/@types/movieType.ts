interface MovieGenre {
	id: number;
	name: string;
}

export interface MovieType {
	id: number;
	adult: boolean;
	title: string;
	overview: string;
	backdrop_path: string;
	poster_path: string;
	popularity: number;
	media_type: string;
	release_date: string;
	tagline: string;
	genres: MovieGenre[];
}
