import HeroContent from '../hero/heroContent';
import HeroCta from '../hero/heroCta';
import heroStyles from '../../styles/Hero.module.scss';

function hero() {
	return (
		<section className={heroStyles.container}>
			<div className={heroStyles.bgImg}>
				<HeroContent />
				<HeroCta />
			</div>
		</section>
	);
}

export default hero;
