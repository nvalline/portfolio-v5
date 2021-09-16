function sectionHeaders({ title, subtitle, className }) {
	return (
		<div className={className}>
			<h3>{subtitle}</h3>
			<h2>{title}</h2>
			<hr />
		</div>
	);
}

export default sectionHeaders;
