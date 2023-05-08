<script lang="ts">
	import type { Experience } from '../experience';

	export let experience: Experience;
</script>

<div class="space-y-3">
	<div>
		<h3 class="font-semibold">{experience.title}</h3>
		<h4>{experience.employer}</h4>
		<p class="text-neutral-600">{experience.duration}</p>
		<p class="text-neutral-600">{experience.location}</p>
	</div>
	<p>{experience.description}</p>
	<p><span class="font-semibold">Skills: </span>{experience.skills.join(' · ')}</p>
</div>
