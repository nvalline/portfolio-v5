import Link from 'next/link';
import Burger from './burger';
import navStyles from '../../../styles/Nav.module.scss';

function navbar(props) {
	return (
		<nav className={navStyles.navContainer}>
			<div className={navStyles.logoContainer}>
				<Link href='/'>
					<a>
						<img
							src='/images/nv_initials.svg'
							alt='NV Logo'
							className={navStyles.logoImage}
						/>
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
