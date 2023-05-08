<script lang="ts">
	export let cover: string;
	export let pp: string;
</script>

<div class="flex flex-col py-8 items-center relative shadow bg-neutral-50 rounded">
	<img
		src={cover}
		alt="abstract background pattern"
		class="absolute top-0 rounded-t h-2/5 w-full"
	/>
	<img
		src={pp}
		class="rounded-full h-40 w-40 border-4 border-neutral-50 z-10 my-5"
		alt="a portrait of me"
	/>
	<slot />
</div>
