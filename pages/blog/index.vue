<script setup lang="ts">
useSeoMeta({
	title: "Dan Berry's Blog",
});

const { data: posts } = await useAsyncData('blog', () => queryCollection("blog")
	.order("date", 'DESC')
	.all())
</script>

<template>
	<div class="flex flex-col space-y-5">
		<PostPreview v-for="post in posts" :key="post.id" :post="post">
		</PostPreview>
	</div>
</template>
