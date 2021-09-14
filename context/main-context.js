import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/reducer';

// Initial State
const initialState = {
	burgerIsActive: false
};

// Create Context
const AppContext = createContext();

// Context Provider
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleNavToggle = () => {
		dispatch({ type: 'HAMBURGER_TOGGLE' });
	};

	return (
		<AppContext.Provider value={{ ...state, handleNavToggle }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
