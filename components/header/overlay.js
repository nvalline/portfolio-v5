import navStyles from '../../styles/Nav.module.scss';

function overlay({ burgerIsActive }) {
	return (
		<div
			className={
				burgerIsActive
					? `${navStyles.overlay} ${navStyles.fadeIn}`
					: `${navStyles.overlay} ${navStyles.fadeOut}`
			}
		></div>
	);
}

export default overlay;
