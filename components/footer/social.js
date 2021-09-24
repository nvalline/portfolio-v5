import { socialLinks } from '../../data/socialLinks';
import footerStyles from '../../styles/Footer.module.scss';

function social() {
	return (
		<div className={footerStyles.social}>
			<h3>Social</h3>
			<hr />
			{socialLinks.map((link) => {
				return (
					<a href={link.url} target='_blank' key={link.id} rel='noreferrer'>
						{link.name}
					</a>
				);
			})}
		</div>
	);
}

export default social;
