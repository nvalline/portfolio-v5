import { useEffect, useState } from 'react';
import Overlay from './overlay';
import Navbar from './navBar/navbar';
import MobileMenu from './mobileMenu';
import navStyles from '../../styles/Nav.module.scss';

function header() {
	const [burgerIsActive, setBurgerIsActive] = useState(false);

	const toggleNav = () => {
		if (burgerIsActive === true) {
			setBurgerIsActive(false);
		} else {
			setBurgerIsActive(true);
		}
	};

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

export default header;
