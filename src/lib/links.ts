export type Link = {
	href: string;
	icon: string;
};

export const links: Record<string, Link> = {
	github: {
		href: 'https://github.com/deb1g19',
		icon: 'logo-github'
	},
	linkedin: {
		href: 'https://www.linkedin.com/in/berryde/',
		icon: 'logo-linkedin'
	},
	mail: {
		href: 'mailto:website@berryde.com',
		icon: 'mail'
	}
};
