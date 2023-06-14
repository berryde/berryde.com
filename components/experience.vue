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
		<span class=""
			><span class="">{{ title }}</span
			>, {{ subtitle }}</span
		>

		<p class="font-light text-sky-800">{{ date }}</p>
		<p class="font-light text-sky-800">{{ location }}</p>
	</div>
</template>
