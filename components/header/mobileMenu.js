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
	);
}

export default mobileMenu;
