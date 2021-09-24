import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Overlay from './overlay';
import Navbar from './navBar/navbar';
import MobileMenu from './mobileMenu';
import navStyles from '../../styles/Nav.module.scss';

function Header() {
	const [burgerIsActive, setBurgerIsActive] = useState(false);
	const router = useRouter();

	const toggleNav = () => {
		if (burgerIsActive === true) {
			setBurgerIsActive(false);
		} else {
			setBurgerIsActive(true);
		}
	};

	// Update burger state on route change
	useEffect(() => {
		setBurgerIsActive(false);
	}, [router.asPath]);

	// Disable scroll when overlay is active
	useEffect(() => {
		if (burgerIsActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [burgerIsActive]);

	return (
		<header className={navStyles.header}>
			<Overlay burgerIsActive={burgerIsActive} />
			<Navbar burgerIsActive={burgerIsActive} toggleNav={toggleNav} />
			<MobileMenu burgerIsActive={burgerIsActive} />
		</header>
	);
}

export default Header;
