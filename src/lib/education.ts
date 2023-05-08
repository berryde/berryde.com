export type Education = {
	school: string;
	degree: string;
	duration: string;
	description: string;
};

export const education: Education[] = [
	{
		school: 'University of Southampton',
		degree: 'MEng Computer Science',
		duration: '2019 - 2023',
		description:
			'I studied for 4 years the University of Southampton covering a range of topics including machine learning, computer vision, natural language processing and programming language concepts. I have been a committee member of the University Lifesaving Club for the majority of my studies.'
	},
	{
		school: 'Sherborne School',
		degree: 'GCSE & A Levels',
		duration: '2014 - 2019',
		description:
			'At Sherborne, I studied A-Levels in Mathematics, Spanish and Physics, achieving A* in all three. I also studied AS Music Technology, achieving an A.'
	}
];
