<script setup lang="ts">
const posts = await queryContent("/blog")
	.sort({ date: -1 }) // show latest articles first
	.only(["image", "_path", "title", "description"])
	.where({ _partial: false }) // exclude the Partial files
	.find();
</script>

<template>
	<Navbar></Navbar>

	<ul class="pt-10">
		<PostPreview v-for="post in posts" :key="post.slug" :post="post">
		</PostPreview>
	</ul>
</template>
