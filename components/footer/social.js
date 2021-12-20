import footerStyles from '../../styles/Footer.module.scss';

function social() {
	const socialLinks = [
		{
			id: 1,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/nvalline/'
		},
		{
			id: 2,
			name: 'Github',
			url: 'https://github.com/nvalline/'
		}
	];

	return (
		<div className={footerStyles.social}>
			<h3>Social Links</h3>
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
