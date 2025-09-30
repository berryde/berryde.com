<script setup>
useSeoMeta({ title: "Dan Berry" });
</script>

<template>
	<div class="flex flex-col space-y-8">
		<Jumbotron></Jumbotron>
		<Section title="About">
			<p>
				I'm a Software Engineer experienced in full-stack web development. I’m currently working on artificial
				intelligence to protect our democracies at Helsing. I'm particularly interested in front-end
				performance, building interfaces for unconventional form factors and maximising walk-up usability.
			</p>
		</Section>
		<Section title="Skills">
			<p>
				I am always on the lookout for new technologies to learn, however, these
				are some of my favourite tools at the moment:
			</p>
			<List :items="[
				'React',
				'GraphQL',
				'Java',
				'SvelteKit',
				'TypeScript',
				'Figma',
			]" />
		</Section>
		<Section title="Experience">
			<div class="grid grid-cols-2 gap-5">
				<Experience title="Software Engineer" subtitle="Helsing" date="October 2025 - Present"
					location="London, UK"></Experience>
				<Experience title="Software Engineer" subtitle="Palantir Technologies"
					date="August 2023 - September 2025" location="London, UK"></Experience>
				<Experience title="Software Engineer Intern" subtitle="J.P. Morgan" date="June 2022 - August 2022"
					location="Bournemouth, UK"></Experience>
				<Experience title="Software Engineer Intern" subtitle="BAE Systems" date="July 2021 - September 2021"
					location="Yeovil, UK (Remote)"></Experience>
				<Experience title="Software Engineer" subtitle="Lumico Digital" date="December 2020 - June 2021 "
					location="Fareham, UK (Remote)"></Experience>
			</div>
		</Section>
		<Section title="Education">
			<div class="grid grid-cols-2 gap-5">
				<Experience title="MEng Computer Science" subtitle="First Class Honours"
					date="September 2019 - June 2023" location="University of Southampton"></Experience>
				<Experience title="A Levels" subtitle="A*A*A*" date="September 2015 - June 2019"
					location="Sherborne School"></Experience>
			</div>
		</Section>
	</div>
</template>
