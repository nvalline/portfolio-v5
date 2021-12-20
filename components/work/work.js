import SectionHeader from '../misc/sectionHeaders';
import ProjectCard from './projectCard';
import workStyles from '../../styles/Work.module.scss';
import { projects } from '../../data/projects';

function work() {
	const projectData = projects.sort((a, b) => (a.id < b.id ? 1 : -1));

	return (
		<section className={workStyles.workContainer} id='my_work'>
			<SectionHeader
				title='Latest Projects'
				subtitle='Get to know more about my work'
				className={workStyles.header}
			/>
			<div className={workStyles.cardContainer}>
				{projectData.slice(0, 4).map((project) => {
					return <ProjectCard key={project.id} {...project} />;
				})}
			</div>
		</section>
	);
}

export default work;
