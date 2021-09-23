import { useState } from 'react';
import SectionHeader from '../sectionHeaders';
import ContactForm from './contactForm';
import SuccessMsg from './success';
import contactStyles from '../../styles/Contact.module.scss';

function Contact() {
	const [showForm, setShowForm] = useState(true);

	return (
		<section className={contactStyles.contactContainer} id='contact'>
			<SectionHeader
				title='Message Me'
				subtitle='Get in touch to see how I can help'
				className={contactStyles.header}
			/>
			{showForm === true ? (
				<ContactForm setShowForm={setShowForm} />
			) : (
				<SuccessMsg />
			)}
		</section>
	);
}

export default Contact;
