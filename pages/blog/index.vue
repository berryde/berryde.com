<script setup lang="ts">
const metadata = ["image", "_path", "title", "description", "date", "tags"];
const posts = await queryContent<PostMetadata>("/blog")
	.sort({ date: -1 })
	.only(metadata)
	.where({ _partial: false })
	.find();
</script>

<template>
	<Navbar></Navbar>

	<ul class="pt-10">
		<PostPreview v-for="post in posts" :key="post.slug" :post="post">
		</PostPreview>
	</ul>
</template>
