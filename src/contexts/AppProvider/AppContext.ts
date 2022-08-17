import { createContext } from 'react';
import { AppContextType } from '../../@types/appTypes';

const AppContext = createContext<AppContextType | null>(null);
export default AppContext;
