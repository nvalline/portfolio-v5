import { urlFor } from '../../sanity';

import { ImageFill } from '../misc/Images';
import Button from '../forms/buttons';
import workStyles from '../../styles/Work.module.scss';

function projectCard({ id, title, description, link, image }) {
	const img = urlFor(image).url();

	return (
		<div className={workStyles.card}>
			<div className={workStyles.imageContainer}>
				<ImageFill src={img} alt={title} className={workStyles.card__image} />
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
