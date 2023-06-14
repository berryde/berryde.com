<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Props {
	post: Pick<ParsedContent, string>;
}
defineProps<Props>();
</script>

<template>
	<div class="flex space-x-5">
		<NuxtImg
			fit="cover"
			width="100"
			height="100"
			:src="post.image"
			class="rounded w-20 h-20"
		></NuxtImg>
		<div>
			<NuxtLink :to="post._path" class="font-bold text-sky-800 text-xl">{{
				post.title
			}}</NuxtLink>
			<p class="line-clamp-2">{{ post.description }}</p>
		</div>
	</div>
</template>
