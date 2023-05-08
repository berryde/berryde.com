<script lang="ts">
	export let title: string;
</script>

<div class="bg-neutral-50 p-5 shadow rounded space-y-3">
	<h2 class="text-xl font-semibold">{title}</h2>
	<slot />
</div>
