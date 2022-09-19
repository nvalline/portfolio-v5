import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { TextInput, Textarea } from '../forms/formItems';
import Button from '../forms/buttons';

import contactStyles from '../../styles/Contact.module.scss';

function ContactForm({ setShowForm }) {
	const form = useRef();
	const [values, setValues] = useState({
		from_name: '',
		from_email: '',
		subject: '',
		message: ''
	});

	// Update form input values
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// hCaptcha Consts
	const hcaptchaRef = useRef(null);
	const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

	const handleSubmit = (e) => {
		e.preventDefault();

		// Execute the hCaptcha when the form is submitted
		hcaptchaRef.current.execute();
	};

	const handleVerificationSuccess = async (token) => {
		// If the hCaptcha code is null or undefined indicating that the hCaptcha was expired then return early
		if (!token) {
			return;
		}

		try {
			const response = await fetch('/api/verify-form', {
				method: 'POST',
				body: JSON.stringify({ token }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				emailjs
					.sendForm(
						process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
						process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
						form.current,
						process.env.NEXT_PUBLIC_EMAILJS_USER_ID
					)
					.then(
						(result) => {
							setValues({
								from_name: '',
								from_email: '',
								subject: '',
								message: ''
							});
						},
						(error) => {
							console.log(error.text);
						}
					);

				setShowForm(false);
			} else {
				const error = await response.json();
				throw new Error(error.message);
			}
		} catch (error) {
			console.log(error?.message || 'Something went wrong');
		} finally {
			setValues({
				from_name: '',
				from_email: '',
				subject: '',
				message: ''
			});
		}
	};

	return (
		<form ref={form} onSubmit={handleSubmit}>
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
			<HCaptcha
				id={'test'}
				ref={hcaptchaRef}
				size='invisible'
				sitekey={SITE_KEY}
				onVerify={(token) => handleVerificationSuccess(token)}
			/>
			<Button type='submit' className={contactStyles.button} text='Send' />
		</form>
	);
}

export default ContactForm;
