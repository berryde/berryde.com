<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<div class="flex flex-col gap-2">
		<h2 class="text-xl font-semibold text-sky-700 dark:text-sky-300">
			{{ title }}
		</h2>
		<slot />
	</div>
</template>
