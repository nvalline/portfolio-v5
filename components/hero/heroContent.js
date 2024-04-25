import HeroCta from './heroCta';

import heroStyles from '../../styles/Hero.module.scss';

function heroContent() {
	return (
		<div className={heroStyles.contentBlock}>
			<div className={heroStyles.greeting}>
				<span></span>
				<h3>Hello there!</h3>
			</div>
			<h1>
				I am <span>Nate Valline</span>
			</h1>
			<h2>I am a Full Stack Software Engineer with a focus on the Front End</h2>
			<HeroCta />
		</div>
	);
}

export default heroContent;
