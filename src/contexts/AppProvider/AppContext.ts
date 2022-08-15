import { createContext } from 'react';
import { AppContextType } from '../../@types/AppTypes';

const AppContext = createContext<AppContextType | null>(null);
export default AppContext;
