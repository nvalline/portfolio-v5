import { useRouter } from 'next/router';
import Button from '../forms/buttons';
import heroStyles from '../../styles/Hero.module.scss';
import btnStyles from '../../styles/Buttons.module.scss';

function HeroCta() {
	const router = useRouter();

	return (
		<div className={heroStyles.ctaContainer}>
			<Button
				type='button'
				className={btnStyles.primaryBtn}
				onClick={() => router.push('/#my_work')}
				text='my work'
			/>
			<Button
				type='button'
				className={btnStyles.secondaryBtn}
				onClick={() => router.push('/#about')}
				text='skills'
			/>
		</div>
	);
}

export default HeroCta;
