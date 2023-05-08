<script lang="ts">
	export let items: string[] = [];
</script>

<ul class="font-mono text-sky-800 grid grid-cols-2 md:grid-cols-3">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ul>

<style lang="postcss">
	li::before {
		content: '▹';
		margin-right: 1em;
	}
</style>
