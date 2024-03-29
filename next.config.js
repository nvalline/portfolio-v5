module.exports = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
		NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
		NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
		NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
		NEXT_PUBLIC_HCAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
		NEXT_PUBLIC_HCAPTCHA_SECRET: process.env.NEXT_PUBLIC_HCAPTCHA_SECRET,
		NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET
	},
	images: {
		domains: ['cdn.sanity.io']
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	}
};
