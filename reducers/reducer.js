const reducer = (state, action) => {
	if (action.type === 'HAMBURGER_TOGGLE') {
		if (state.burgerIsActive === true) {
			return { ...state, burgerIsActive: false };
		} else {
			return { ...state, burgerIsActive: true };
		}
	}

	throw new Error('no matching action type');
};

export default reducer;
