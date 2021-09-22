import SectionHeader from '../sectionHeaders';
import ContactForm from './contactForm';
import contactStyles from '../../styles/Contact.module.scss';

function contact() {
	return (
		<section className={contactStyles.contactContainer} id='contact'>
			<SectionHeader
				title='Message Me'
				subtitle='Get in touch to see how I can help'
				className={contactStyles.header}
			/>
			<ContactForm />
		</section>
	);
}

export default contact;
