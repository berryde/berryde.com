export type Experience = {
	employer: string;
	type: string;
	title: string;
	duration: string;
	location: string;
	skills: string[];
	description: string;
};

export const experiences: Experience[] = [
	{
		employer: 'J.P. Morgan',
		type: 'Internship',
		title: 'Software Engineering Summer Intern',
		duration: 'June 2022 - August 2022 · 3 mos',
		location: 'Bournemouth, UK',
		description:
			'At J. P. Morgan, I helped develop a release management application with active users, using continuous deployment. Additional responsibilities included the migration of a web application with complex dependencies from Angular 12 to 13, and the design and implementation of automated validation features using Java to eliminate toil for release managers.',
		skills: ['Front-End Development', 'TypeScript', 'Angular', 'Java', 'Spring Boot']
	},
	{
		employer: 'BAE Systems',
		type: 'Internship',
		title: 'Software Engineering Summer Intern',
		duration: 'Jul 2021 - Sep 2021 · 3 mos',
		location: 'Yeovil, UK',
		description:
			'At BAE Systems I worked in an agile team, rebuilding a legacy web application with React and Java. My typical tasks included unit testing, component implementation and documentation.At BAE Systems I worked in an agile team, rebuilding a legacy web application with React and Java. My typical tasks included unit testing, component implementation and documentation.',
		skills: [
			'Front-End Development',
			'TypeScript',
			'React',
			'Java',
			'Spring Boot',
			'Web Development'
		]
	},
	{
		employer: 'Lumico Digital',
		type: 'Part-time',
		title: 'Undergraduate Software Developer',
		duration: 'Dec 2020 - Jun 2021 · 7 mos',
		location: 'Hampshire, England, United Kingdom',
		description:
			'At Lumico I spent most of my time working with a range of clients to develop bespoke mobile and web apps, using Flutter and AWS.At Lumico I spent most of my time working with a range of clients to develop bespoke mobile and web apps, using Flutter and AWS.',
		skills: [
			'Flutter',
			'Web Design',
			'Mobile Application Development',
			'Amazon Web Services (AWS)',
			'Cloud Development'
		]
	}
];
