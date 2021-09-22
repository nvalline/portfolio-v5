import Social from './social';
import footerStyles from '../../styles/Footer.module.scss';

function footer() {
	return (
		<footer className={footerStyles.footerContainer}>
			<img
				src='/images/nv_initials.svg'
				alt='NV Logo'
				className={footerStyles.logoImage}
			/>
			<Social />
		</footer>
	);
}

export default footer;
