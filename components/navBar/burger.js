import React, { useState } from 'react';
import navStyles from '../../styles/Nav.module.scss';

const burger = () => {
	return (
		<>
			<a href='#' className={navStyles.burgerIcon}>
				<span></span>
				<span></span>
				<span></span>
			</a>
		</>
	);
};

export default burger;
