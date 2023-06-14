<script setup lang="ts">
interface ExperienceProps {
	title: string;
	subtitle: string;
	location: string;
	date: string;
}
defineProps<ExperienceProps>();
</script>

<template>
	<div class="flex-grow">
		<h3 class="font-semibold">{{ title }}</h3>
		<h4>{{ subtitle }}</h4>
		<p class="text-sky-800">{{ date }}</p>
		<p class="text-sky-800">{{ location }}</p>
	</div>
</template>
