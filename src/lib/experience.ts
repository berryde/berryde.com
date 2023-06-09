export type Experience = {
	employer: string;
	type: string;
	title: string;
	duration: string;
	location: string;
	skills: string[];
};

export const experiences: Experience[] = [
	{
		employer: 'J.P. Morgan',
		type: 'Internship',
		title: 'Software Engineering Summer Intern',
		duration: 'June 2022 - August 2022 · 3 mos',
		location: 'Bournemouth, UK',
		skills: ['Front-End Development', 'TypeScript', 'Angular', 'Java', 'Spring Boot']
	},
	{
		employer: 'BAE Systems',
		type: 'Internship',
		title: 'Software Engineering Summer Intern',
		duration: 'July 2021 - September 2021 · 3 mos',
		location: 'Yeovil, UK',
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
		duration: 'December 2020 - June 2021 · 7 mos',
		location: 'Hampshire, England, United Kingdom',
		skills: [
			'Flutter',
			'Web Design',
			'Mobile Application Development',
			'Amazon Web Services (AWS)',
			'Cloud Development'
		]
	}
];
