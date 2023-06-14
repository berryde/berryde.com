<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>

<template>
	<div>
		<h2 class="text-xl font-semibold text-sky-700">{{ title }}</h2>
		<slot />
	</div>
</template>
