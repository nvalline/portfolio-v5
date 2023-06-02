import Link from 'next/link';
import navStyles from '../../styles/Nav.module.scss';

function mobileMenu({ burgerIsActive }) {
	return (
		<div
			className={
				burgerIsActive
					? `${navStyles.mobMenuContainer} ${navStyles.fadeIn}`
					: `${navStyles.mobMenuContainer} ${navStyles.fadeOut}`
			}
		>
			<Link href='/#about'>about</Link>
			<Link href='/#my_work'>my work</Link>
			<Link href='/#contact'>contact</Link>
		</div>
	);
}

export default mobileMenu;
