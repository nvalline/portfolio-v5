import Link from 'next/link';
import Image from 'next/image';
import Burger from './burger';
import navStyles from '../../../styles/Nav.module.scss';
import logoPic from '../../../public/images/nv_initials.svg';

function navbar(props) {
	return (
		<nav className={navStyles.navContainer}>
			<div className={navStyles.logoContainer}>
				<Link href='/'>
					<a>
						<div className={navStyles.imageContainer}>
							<Image
								src={logoPic}
								alt='NV Logo'
								className={navStyles.logoImage}
								layout='fill'
							/>
						</div>
					</a>
				</Link>
			</div>
			<div className={navStyles.mobileNav}>
				<Burger {...props} />
			</div>
			<div className={navStyles.navLinks}>
				<Link href='/#about'>
					<a>about</a>
				</Link>
				<Link href='/#my_work'>
					<a>my work</a>
				</Link>
				<Link href='/#contact'>
					<a>contact</a>
				</Link>
			</div>
		</nav>
	);
}

export default navbar;
