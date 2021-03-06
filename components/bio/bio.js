import SectionHeader from '../misc/sectionHeaders';
import BioContent from '../bio/bioContent';
import BioSkills from '../bio/bioSkills';
import bioStyles from '../../styles/Bio.module.scss';

function bio({ skills }) {
	return (
		<section className={bioStyles.bioContainer}>
			<SectionHeader
				title='Personal Info'
				subtitle='Get to know more about me'
				className={bioStyles.header}
			/>
			<div className={bioStyles.contentWrapper}>
				<BioContent />
				<BioSkills skills={skills} />
			</div>
		</section>
	);
}

export default bio;
