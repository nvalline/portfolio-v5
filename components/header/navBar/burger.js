import navStyles from '../../../styles/Nav.module.scss';

const burger = ({ burgerIsActive, toggleNav }) => {
	return (
		<>
			<button
				className={
					burgerIsActive
						? `${navStyles.burgerIcon} ${navStyles.burgerOpen}`
						: navStyles.burgerIcon
				}
				onClick={toggleNav}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
};

export default burger;
