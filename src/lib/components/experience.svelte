<script lang="ts">
	import type { Experience } from '../experience';

	export let experience: Experience;
</script>

<div class="space-y-3">
	<div>
		<h3 class="font-semibold">{experience.title}</h3>
		<h4>{experience.employer}</h4>
		<p class="text-sky-800">{experience.duration}</p>
		<p class="text-sky-800">{experience.location}</p>
	</div>
</div>
