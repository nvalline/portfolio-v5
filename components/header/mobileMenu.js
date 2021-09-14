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
			<Link href='#'>
				<a>about</a>
			</Link>
			<Link href='#'>
				<a>my work</a>
			</Link>
			<Link href='#'>
				<a>contact</a>
			</Link>
		</div>
	);
}

export default mobileMenu;
