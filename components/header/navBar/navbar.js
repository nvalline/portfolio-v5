import Link from 'next/link';
import { ImageFill } from '../../misc/Images';
import Burger from './burger';
import navStyles from '../../../styles/Nav.module.scss';
import logoPic from '../../../public/images/nv_initials.svg';

function navbar(props) {
	return (
		<nav className={navStyles.navContainer}>
			<div className={navStyles.logoContainer}>
				<Link href='/' passHref>
					<div className={navStyles.imageContainer}>
						<ImageFill
							src={logoPic}
							alt='NV Logo'
							className={navStyles.logoImage}
						/>
					</div>
				</Link>
			</div>
			<div className={navStyles.mobileNav}>
				<Burger {...props} />
			</div>
			<div className={navStyles.navLinks}>
				<Link href='/#about'>about</Link>
				<Link href='/#my_work'>my work</Link>
				<Link href='/#contact'>contact</Link>
			</div>
		</nav>
	);
}

export default navbar;
