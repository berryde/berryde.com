<script setup>
useSeoMeta({ title: "Dan Berry" });
</script>

<template>
	<div class="flex flex-col space-y-8">
		<Jumbotron></Jumbotron>
		<Section title="About">
			<p>
				I am a full-stack software engineer and I enjoy crafting interactive
				digital experiences. I strive to create functional, robust software
				without compromising on user experience. I am also enthusiastic about
				leveraging technology to enable continuous learning.
			</p>
		</Section>
		<Section title="Skills">
			<p>
				I love learning how to use new technologies, however, these are some of
				my favourite tools at the moment:
			</p>
			<List
				:items="[
					'SvelteKit',
					'Angular',
					'TypeScript',
					'React',
					'Figma',
					'Java',
				]"
			/>
		</Section>
		<Section title="Experience">
			<div class="flex flex-wrap gap-5">
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
				subtitle="University of Southampton"
				date="September 2019 - June 2023"
				location="Southampton, UK"
			></Experience>
		</Section>
	</div>
</template>
