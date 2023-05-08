<script>
	import Card from '../lib/components/card.svelte';
	import Education from '../lib/components/education.svelte';
	import Experience from '../lib/components/experience.svelte';
	import Icon from '../lib/components/icon.svelte';
	import Jumbotron from '../lib/components/jumbotron.svelte';
	import List from '../lib/components/list.svelte';
	import { education } from '../lib/education';
	import { experiences } from '../lib/experience';
	import { links } from '../lib/links';
</script>

<div class="w-full min-h-screen bg-neutral-200">
	<main class="flex flex-col max-w-5xl mx-auto space-y-2 md:space-y-3 p-2 md:p-5">
		<Jumbotron cover="cover.png" pp="pp.png">
			<p class="text-2xl font-bold">Dan Berry</p>
			<p class="text-lg text-center leading-6">
				Incoming SWE at Palantir | MEng CS<br />at University of Southampton
			</p>
			<div class="flex space-x-5 mt-5 text-sky-700">
				{#each links as link}
					<Icon href={link.href} name={link.icon} />
				{/each}
			</div>
		</Jumbotron>
		<Card title="About">
			<p>
				I am a final-year MEng Computer Science student at the University of Southampton, graduating
				July 2023. I am a full-stack developer and I enjoy crafting interactive digital experiences.
				I am also enthusiastic about leveraging technology to enable continuous learning. I will be
				starting my new role as a Software Engineer at Palantir Technologies in August 2022.
			</p>
		</Card>
		<Card title="Experience">
			{#each experiences as experience, i}
				<Experience {experience} />
				{#if i < experiences.length - 1}
					<hr />
				{/if}
			{/each}
		</Card>
		<Card title="Education">
			{#each education as edu, i}
				<Education education={edu} />
				{#if i < education.length - 1}
					<hr />
				{/if}
			{/each}
		</Card>
		<Card title="Skills">
			<List items={['SvelteKit', 'Angular', 'Spring Boot', 'React', 'Figma']} />
		</Card>
	</main>
</div>
