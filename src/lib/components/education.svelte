<script lang="ts">
	import type { Education } from '../education';

	export let education: Education;
</script>

<div class="space-y-3">
	<div>
		<h3 class="font-semibold">{education.school}</h3>
		<h4>{education.degree}</h4>
		<p class="text-neutral-600">{education.duration}</p>
	</div>
	<p>{education.description}</p>
</div>
