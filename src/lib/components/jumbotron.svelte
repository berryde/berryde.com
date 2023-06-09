<script lang="ts">
	export let pp: string;
</script>

<div class="flex flex-col py-8 items-center relative">
	<img src={pp} class="rounded-full h-40 w-40 z-10 my-5" alt="a portrait of me" />
	<slot />
</div>
