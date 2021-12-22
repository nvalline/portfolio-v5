export default {
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		{
			name: 'skill',
			title: 'Skill',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags'
			}
		}
	]
};
