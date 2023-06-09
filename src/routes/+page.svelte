<script>
	import Card from '../lib/components/card.svelte';
	import Education from '../lib/components/education.svelte';
	import Experience from '../lib/components/experience.svelte';
	import Jumbotron from '../lib/components/jumbotron.svelte';
	import List from '../lib/components/list.svelte';
	import { education } from '../lib/education';
	import { experiences } from '../lib/experience';
	import { links } from '../lib/links';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
</script>

<div class="w-full min-h-screen bg-sky-50 text-sky-900">
	<main class="flex flex-col max-w-4xl mx-auto space-y-2 md:space-y-3 p-2 md:p-5">
		<Jumbotron pp="pp.png">
			<p class="text-2xl font-bold">👋 Hello! I'm Dan Berry.</p>
			<p class="text-lg max-w-xs text-center leading-6 text-sky-900">
				I am a Software Engineer at<br /> Palantir Technologies, London.
			</p>
			<div class="flex space-x-5 mt-5 text-sky-700">
				<a href={links.linkedin.href}><LinkedinLogo weight="fill" size={24} /></a>
				<a href={links.mail.href}><EnvelopeSimple weight="bold" size={24} /></a>
				<a href={links.github.href}><GithubLogo weight="fill" size={24} /></a>
			</div>
		</Jumbotron>
		<Card title="About">
			<p>
				I am a full-stack software engineer and I enjoy crafting interactive digital experiences. I
				strive to create functional, robust software without compromising on user experience. I am
				also enthusiastic about leveraging technology to enable continuous learning.
			</p>
		</Card>
		<Card title="Skills">
			<p>
				I love learning how to use new technologies, however, these are some of my favourite tools
				at the moment:
			</p>
			<List items={['SvelteKit', 'Angular', 'TypeScript', 'React', 'Figma', 'Java']} />
		</Card>
		<Card title="Experience">
			<div class="flex flex-wrap gap-5">
				{#each experiences as experience, i}
					<Experience {experience} />
					{#if i < experiences.length - 1}
						<hr />
					{/if}
				{/each}
			</div>
		</Card>
		<Card title="Education">
			{#each education as edu, i}
				<Education education={edu} />
				{#if i < education.length - 1}
					<hr />
				{/if}
			{/each}
		</Card>
	</main>
</div>
