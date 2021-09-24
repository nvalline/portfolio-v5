import Image from 'next/image';
import Button from '../forms/buttons';
import workStyles from '../../styles/Work.module.scss';

function projectCard({ id, title, description, link, img }) {
	return (
		<div className={workStyles.card}>
			<div className={workStyles.imageContainer}>
				<Image src={img} alt={title} layout='fill' />
			</div>
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
