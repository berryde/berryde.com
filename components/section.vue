<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold text-sky-700 dark:text-sky-300">
			{{ title }}
		</h2>
		<slot />
	</div>
</template>
