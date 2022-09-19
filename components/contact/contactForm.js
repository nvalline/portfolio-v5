import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TextInput, Textarea } from '../forms/formItems';
import Button from '../forms/buttons';
import contactStyles from '../../styles/Contact.module.scss';

function ContactForm({ setShowForm }) {
	const form = useRef();

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowForm(false);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<TextInput
				type='text'
				name='from_name'
				className={contactStyles.input}
				placeholder='Name'
				required={true}
			/>
			<TextInput
				type='email'
				name='from_email'
				className={contactStyles.input}
				placeholder='Email'
				required={true}
			/>
			<TextInput
				type='text'
				name='subject'
				className={contactStyles.input}
				placeholder='Subject'
				required={true}
			/>
			<Textarea
				id='message'
				name='message'
				rows='5'
				placeholder='Message'
				className={contactStyles.textarea}
				required={true}
			/>
			<Button type='submit' className={contactStyles.button} text='Send' />
		</form>
	);
}

export default ContactForm;
