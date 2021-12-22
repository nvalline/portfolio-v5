import bioStyles from '../../styles/Bio.module.scss';

function bioSkills({ skills }) {
	return (
		<div className={bioStyles.bioSkills}>
			<h3>Skills</h3>
			<div className={bioStyles.skillBtns}>
				{skills.map((skill, index) => {
					return <h4 key={index}>{skill}</h4>;
				})}
			</div>
		</div>
	);
}

export default bioSkills;
