import { useEffect } from 'react';
import { useScrollContext } from '../../context/context';
import { useInView } from 'react-intersection-observer';
import { CgScrollV } from 'react-icons/cg';
import dividerStyles from '../../styles/Divider.module.scss';

function divider() {
	const [isScrolled, setIsScrolled] = useScrollContext();
	const { ref, inView, entry } = useInView({
		rootMargin: '-200px 0px 0px 0px'
	});

	useEffect(() => {
		if (inView === true) {
			// Divider in viewport
			setIsScrolled(false);
		} else if (inView === false) {
			// Divider out of viewport
			setIsScrolled(true);
		}
	}, [inView]);

	return (
		<div className={dividerStyles.divider} id='about' ref={ref}>
			<div className={dividerStyles.circle}>
				<CgScrollV className={dividerStyles.icon} />
			</div>
		</div>
	);
}

export default divider;
