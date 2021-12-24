export default {
	name: 'home_seo',
	title: 'Home SEO',
	type: 'document',
	fields: [
		{
			name: 'page_title',
			title: 'Page Title',
			type: 'string'
		},
		{
			name: 'page_desc',
			title: 'Page Description',
			type: 'string'
		},
		{
			name: 'page_keywords',
			title: 'Page Keywords',
			description: 'This is a string',
			type: 'string'
		},
		{
			name: 'og_title',
			title: 'OG Title',
			type: 'string'
		},
		{
			name: 'og_type',
			title: 'OG Type',
			type: 'string'
		},
		{
			name: 'og_image',
			title: 'OG Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'og_url',
			title: 'OG URL',
			type: 'url'
		},
		{
			name: 'twitter_card',
			title: 'Twitter Card',
			type: 'string'
		},
		{
			name: 'twitter_creator',
			title: 'Twitter Creator',
			type: 'string'
		},
		{
			name: 'twitter_title',
			title: 'Twitter Title',
			type: 'string'
		},
		{
			name: 'twitter_image',
			title: 'Twitter Image',
			type: 'image',
			options: {
				hotspot: true
			}
		}
	]
};
