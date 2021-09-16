import { TextInput, Textarea } from '../forms/formItems';
import Button from '../forms/buttons';
import contactStyles from '../../styles/Contact.module.scss';

function contactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('SUBMIT BTN CLICKED');
		// !Add emailjs
	};

	return (
		<form>
			<TextInput
				type='text'
				name='name'
				value=''
				onChange=''
				className={contactStyles.input}
				placeholder='Name'
			/>
			<TextInput
				type='email'
				name='email'
				value=''
				onChange=''
				className={contactStyles.input}
				placeholder='Email'
			/>
			<TextInput
				type='text'
				name='subject'
				value=''
				onChange=''
				className={contactStyles.input}
				placeholder='Subject'
			/>
			<Textarea
				id='message'
				name='message'
				cols=''
				rows='5'
				placeholder='Message'
				className={contactStyles.textarea}
			/>
			<Button
				type='submit'
				className={contactStyles.button}
				onClick={handleSubmit}
				text='Send'
			/>
		</form>
	);
}

export default contactForm;
