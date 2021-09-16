import SectionHeader from '../sectionHeaders';
import bioStyles from '../../styles/Bio.module.scss';

function bio() {
	return (
		<section>
			<SectionHeader
				title='Personal Info'
				subtitle='Get to know more about me'
				className={bioStyles.header}
			/>
		</section>
	);
}

export default bio;
