import { RiMailSendLine } from 'react-icons/ri';
import contactStyles from '../../styles/Contact.module.scss';

function success() {
	return (
		<div className={contactStyles.submitSuccess}>
			<RiMailSendLine className={contactStyles.icon} />
			<p>Thank you, your message has been received!</p>
			<p>I will reply via email shortly.</p>
			<p>~ Nate Valline ~</p>
		</div>
	);
}

export default success;
