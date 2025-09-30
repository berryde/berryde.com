<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

interface Props {
	post: BlogCollectionItem;
}
defineProps<Props>();

function formatDate(date: string) {
	return new Date(date).toLocaleString("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

function formatTags(tags: string[]) {
	return tags.join(", ");
}
</script>

<template>
	<div class="flex items-center sm:space-x-5">
		<img fit="cover" :src="post.image" class="rounded w-20 h-20 fit object-cover hidden sm:block" />
		<div class="space-y-1">
			<NuxtLink :to="post.path" class="font-bold text-aztec-800 dark:text-aztec-300 text-xl">{{ post.title }}
			</NuxtLink>
			<p class="line-clamp-3 leading-5">{{ post.description }}</p>
			<div class="flex flex-wrap text-aztec-800 dark:text-aztec-100 text-xs space-x-3">
				<p>{{ formatDate(post.date) }} | {{ formatTags(post.tags) }}</p>
			</div>
		</div>
	</div>
</template>
