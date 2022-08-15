import { useMemo } from 'react';
import AppProviderType from '../../@types/AppProviderType';
import AppContext from './AppContext';

export default function AppProvider({ children }: AppProviderType) {
	const context = useMemo(() => ({}), []);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
