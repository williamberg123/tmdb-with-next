import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org',
});

export default function useApi<T = unknown>(urlPath: string) {
	const [ data, setData ] = useState<T | null>(null);
	const [ isLoading, setIsLoading ] = useState<boolean>(true);

	const getData = useCallback(async () => {
		const response = await api.get(urlPath);
		setData(response.data);
		setIsLoading(false);
	}, [urlPath]);

	useEffect(() => {
		getData();
	}, [getData]);

	return { data, isLoading };
}
