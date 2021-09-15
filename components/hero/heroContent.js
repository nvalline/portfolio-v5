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
			<h2>I am a Front-End Software Engineer</h2>
		</div>
	);
}

export default heroContent;
