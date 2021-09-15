import Button from '../forms/buttons';
import heroStyles from '../../styles/Hero.module.scss';
import btnStyles from '../../styles/Buttons.module.scss';

function heroCta() {
	const handlePrimaryBtn = () => {
		console.log('Primary Btn Click');
	};

	const handleSecondaryBtn = () => {
		console.log('Secondary Btn Click');
	};

	return (
		<div className={heroStyles.ctaContainer}>
			<Button
				type='button'
				className={btnStyles.primaryBtn}
				onClick={handlePrimaryBtn}
				text='my work'
			/>
			<Button
				type='button'
				className={btnStyles.secondaryBtn}
				onClick={handleSecondaryBtn}
				text='skills'
			/>
		</div>
	);
}

export default heroCta;
