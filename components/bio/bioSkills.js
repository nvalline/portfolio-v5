import bioStyles from '../../styles/Bio.module.scss';

function bioSkills() {
	const skills = ['React', 'Next', 'Javascript', 'Sass', 'Html', 'Css', 'Git'];

	return (
		<div className={bioStyles.bioSkills}>
			<h3>Skills</h3>
			<div className={bioStyles.skillBtns}>
				{skills.map((skill) => {
					return <h4>{skill}</h4>;
				})}
			</div>
		</div>
	);
}

export default bioSkills;
