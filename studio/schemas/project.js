export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'active',
			title: 'Is Active',
			type: 'boolean'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text'
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'image_blur',
			title: 'Image Blur',
			description: 'https://blurha.sh/',
			type: 'string'
		}
	]
};
