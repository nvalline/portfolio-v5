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
							src='/images/nv_initials.png'
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
				<a href='#'>about</a>
				<a href='#'>my work</a>
				<a href='#'>contact</a>
			</div>
		</nav>
	);
}

export default navbar;
