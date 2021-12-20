import { ImageFill } from '../misc/Images';
import Social from './social';
import footerStyles from '../../styles/Footer.module.scss';
import logoPic from '../../public/images/nv_initials.svg';

function footer() {
	return (
		<footer className={footerStyles.footerContainer}>
			<div className={footerStyles.imageContainer}>
				<ImageFill
					src={logoPic}
					alt='NV Logo'
					className={footerStyles.logoImage}
				/>
			</div>
			<Social />
		</footer>
	);
}

export default footer;
