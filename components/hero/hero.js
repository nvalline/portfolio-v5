import HeroContent from '../hero/heroContent';
import heroStyles from '../../styles/Hero.module.scss';

function hero() {
	return (
		<section className={heroStyles.container}>
			<div className={heroStyles.bgImg}>
				<HeroContent />
			</div>
		</section>
	);
}

export default hero;
