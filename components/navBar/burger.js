import React, { useState } from 'react';
import navStyles from '../../styles/Nav.module.scss';

const burger = () => {
	const [burgerIsActive, setBurgerIsActive] = useState(false);

	const handleBurger = () => {
		if (!burgerIsActive) {
			setBurgerIsActive(true);
		} else {
			setBurgerIsActive(false);
		}
	};

	return (
		<>
			<button
				className={
					burgerIsActive
						? `${navStyles.burgerIcon} ${navStyles.burgerOpen}`
						: navStyles.burgerIcon
				}
				onClick={handleBurger}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
};

export default burger;
