<script setup>
useSeoMeta({ title: "Dan Berry" });
</script>

<template>
	<div class="flex flex-col space-y-8">
		<Jumbotron></Jumbotron>
		<Section title="About">
			<p>
				Software Engineer experienced in full-stack web development. I recently
				completed my MEng Computer Science master's degree at the University of
				Southampton, graduating with a first class honours.
			</p>
		</Section>
		<Section title="Skills">
			<p>
				I am always on the lookout for new technologies to learn, however, these
				are some of my favourite tools at the moment:
			</p>
			<List
				:items="[
					'SvelteKit',
					'React',
					'Tailwind CSS',
					'TypeScript',
					'Figma',
					'Angular',
				]"
			/>
		</Section>
		<Section title="Experience">
			<div class="grid grid-cols-2 gap-5">
				<Experience
					title="Full-Stack Software Engineer"
					subtitle="Palantir"
					date="August 2023 - Present"
					location="London, UK"
				></Experience>
				<Experience
					title="Software Engineer Intern"
					subtitle="J.P. Morgan"
					date="June 2022 - August 2022"
					location="Bournemouth, UK"
				></Experience>
				<Experience
					title="Software Engineer Intern"
					subtitle="BAE Systems"
					date="July 2021 - September 2021"
					location="Yeovil, UK"
				></Experience>
				<Experience
					title="Software Engineer"
					subtitle="Lumico Digital"
					date="December 2020 - June 2021 "
					location="Fareham, UK"
				></Experience>
			</div>
		</Section>
		<Section title="Education">
			<Experience
				title="MEng Computer Science"
				subtitle="First Class Honours"
				date="September 2019 - June 2023"
				location="University of Southampton"
			></Experience>
		</Section>
	</div>
</template>
