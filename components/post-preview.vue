<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Props {
	post: Pick<ParsedContent, string>;
}
defineProps<Props>();

function formatDate(date: Date) {
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
		<img
			fit="cover"
			:src="post.image"
			class="rounded w-20 h-20 fit object-cover hidden sm:block"
		/>
		<div>
			<NuxtLink :to="post._path" class="font-bold text-sky-800 text-xl">{{
				post.title
			}}</NuxtLink>
			<p class="line-clamp-2">{{ post.description }}</p>
			<div class="flex flex-wrap text-sky-800 text-xs space-x-3">
				<p>{{ formatDate(post.date) }}</p>
				<p>|</p>
				<p>{{ formatTags(post.tags) }}</p>
			</div>
		</div>
	</div>
</template>
