import SectionHeader from '../misc/sectionHeaders';
import ProjectCard from './projectCard';
import workStyles from '../../styles/Work.module.scss';

function work({ projects }) {
	const projectData = projects.sort((a, b) =>
		a._createdAt < b._createdAt ? 1 : -1
	);

	return (
		<section className={workStyles.workContainer} id='my_work'>
			<SectionHeader
				title='Latest Projects'
				subtitle='Get to know more about my work'
				className={workStyles.header}
			/>
			<div className={workStyles.cardContainer}>
				{projectData.map((project) => {
					return <ProjectCard key={project._id} {...project} />;
				})}
			</div>
		</section>
	);
}

export default work;
