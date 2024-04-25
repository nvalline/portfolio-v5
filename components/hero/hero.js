import Image from 'next/image';
import HeroContent from '../hero/heroContent';
import heroStyles from '../../styles/Hero.module.scss';
import heroImg from '../../public/images/headshot.png';

function hero() {
	return (
		<section className={heroStyles.container}>
			<div className={heroStyles.bgImg}>
				<div className={heroStyles.bgImg__wrapper}>
					<div>
						<div className={heroStyles.heroImg_Wrapper}>
							<Image
								src={heroImg}
								alt='nate valline'
								className={heroStyles.heroImg}
								fill={true}
								objectFit='cover'
							/>
						</div>
					</div>
					<HeroContent />
				</div>
			</div>
		</section>
	);
}

export default hero;
