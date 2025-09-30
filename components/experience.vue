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
		<span class="dark:text-aztec-300"><span>{{ title }}</span>, {{ subtitle }}</span>

		<p class="font-light text-aztec-800 dark:text-aztec-200">{{ date }}</p>
		<p class="font-light text-aztec-800 dark:text-aztec-200">{{ location }}</p>
	</div>
</template>
