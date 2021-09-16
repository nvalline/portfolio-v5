import bioStyles from '../../styles/Bio.module.scss';
import { skills } from '../../data/skills';

function bioSkills() {
	return (
		<div className={bioStyles.bioSkills}>
			<h3>Skills</h3>
			<div className={bioStyles.skillBtns}>
				{skills.map((skill) => {
					return <h4 key={skill.id}>{skill.skill}</h4>;
				})}
			</div>
		</div>
	);
}

export default bioSkills;
