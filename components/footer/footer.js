import Image from 'next/image';
import Social from './social';
import footerStyles from '../../styles/Footer.module.scss';
import logoPic from '../../public/images/nv_initials.svg';

function footer() {
	return (
		<footer className={footerStyles.footerContainer}>
			<div className={footerStyles.imageContainer}>
				<Image
					src={logoPic}
					alt='NV Logo'
					className={footerStyles.logoImage}
					layout='fill'
				/>
			</div>
			<Social />
		</footer>
	);
}

export default footer;
