import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useScrollContext } from '../../context/context';
import Overlay from './overlay';
import Navbar from './navBar/navbar';
import MobileMenu from './mobileMenu';
import navStyles from '../../styles/Nav.module.scss';

function header() {
	const [isScrolled] = useScrollContext();
	const [burgerIsActive, setBurgerIsActive] = useState(false);
	const router = useRouter();

	console.log('IS Scrolled', isScrolled);

	const toggleNav = () => {
		if (burgerIsActive === true) {
			setBurgerIsActive(false);
		} else {
			setBurgerIsActive(true);
		}
	};

	// Update burger state on route change
	useEffect(() => {
		if (burgerIsActive) {
			setBurgerIsActive(false);
		}
	}, [router.asPath]);

	// Disable scroll when overlay is active
	useEffect(() => {
		if (burgerIsActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [burgerIsActive]);

	// Page scrolled Nav set to fixed
	if (isScrolled) {
		return (
			<header className={`${navStyles.header} ${navStyles.navScrolled}`}>
				<Overlay burgerIsActive={burgerIsActive} />
				<Navbar burgerIsActive={burgerIsActive} toggleNav={toggleNav} />
				<MobileMenu burgerIsActive={burgerIsActive} />
			</header>
		);
	}

	return (
		<header className={navStyles.header}>
			<Overlay burgerIsActive={burgerIsActive} />
			<Navbar burgerIsActive={burgerIsActive} toggleNav={toggleNav} />
			<MobileMenu burgerIsActive={burgerIsActive} />
		</header>
	);
}

export default header;
