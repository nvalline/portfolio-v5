import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { TextInput, Textarea } from '../forms/formItems';
import Button from '../forms/buttons';
import contactStyles from '../../styles/Contact.module.scss';

function contactForm({ setShowForm }) {
	const form = useRef();

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				'service_i0z7d5s',
				'template_xzxt9xg',
				form.current,
				process.env.REACT_APP_USER_ID
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
			/>
			<TextInput
				type='email'
				name='from_email'
				className={contactStyles.input}
				placeholder='Email'
			/>
			<TextInput
				type='text'
				name='subject'
				className={contactStyles.input}
				placeholder='Subject'
			/>
			<Textarea
				id='message'
				name='message'
				rows='5'
				placeholder='Message'
				className={contactStyles.textarea}
			/>
			<Button type='submit' className={contactStyles.button} text='Send' />
		</form>
	);
}

export default contactForm;
