import Button from '../forms/buttons';
import workStyles from '../../styles/Work.module.scss';

function projectCard({ id, title, description, link, img }) {
	const handleProjectBtn = () => {
		console.log('PROJECT BTN CLICKED');
	};

	return (
		<div key={id} className={workStyles.card}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
			<Button
				type='button'
				className={workStyles.projectBtn}
				onclick={handleProjectBtn}
				text='View Live'
			/>
		</div>
	);
}

export default projectCard;
