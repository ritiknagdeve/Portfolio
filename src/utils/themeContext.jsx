import {createContext} from 'react';

const state = {
    isDarkMode: true,
    toggleTheme: () => {} 
}
const theme = createContext(state);

export default theme;