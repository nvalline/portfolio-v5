import bioStyles from '../../styles/Bio.module.scss';

function bioContent() {
	return (
		<div className={bioStyles.bioContent}>
			<h3>Howdy!</h3>
			<p>
				I am a Full Stack Web Developer with a love for the Front-End. I have a
				wide range of business experience that I incorporate with my creativity
				to create effective and enjoyable website experiences.
			</p>
			<p>
				When I’m not in development mode, you can find me enjoying all that life
				offers. Whether it’s in the mountains & deserts of Utah by bicycle or
				skis, traveling the world or stuffing my face with good food.
			</p>
		</div>
	);
}

export default bioContent;
