<script lang="ts">
	export let title: string;
</script>

<div class="p-5 space-y-3">
	<h2 class="text-xl font-semibold text-sky-700">{title}</h2>
	<slot />
</div>
