import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isScrolled, setIsScrolled] = useState(true);

	return (
		<AppContext.Provider value={[isScrolled, setIsScrolled]}>
			{children}
		</AppContext.Provider>
	);
};

export const useScrollContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
