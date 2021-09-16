import Link from 'next/link';
import Button from '../forms/buttons';
import workStyles from '../../styles/Work.module.scss';

function projectCard({ id, title, description, link, img }) {
	return (
		<div className={workStyles.card}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
			<Button
				type='button'
				className={workStyles.projectBtn}
				onClick={() => window.open(link, '_blank')}
				text='View Live'
			/>
		</div>
	);
}

export default projectCard;
