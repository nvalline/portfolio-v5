import { useGlobalContext } from '../../context/main-context';
import navStyles from '../../styles/Nav.module.scss';

const burger = () => {
	const { burgerIsActive, handleNavToggle } = useGlobalContext();

	return (
		<>
			<button
				className={
					burgerIsActive
						? `${navStyles.burgerIcon} ${navStyles.burgerOpen}`
						: navStyles.burgerIcon
				}
				onClick={handleNavToggle}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</>
	);
};

export default burger;
