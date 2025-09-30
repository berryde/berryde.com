<script setup lang="ts">
useHead({
	script: [
		{
			src: "https://giscus.app/client.js",
			"data-repo": "berryde/berryde.com",
			"data-repo-id": "R_kgDOHPx_fw",
			"data-category": "Comments",
			"data-category-id": "DIC_kwDOHPx_f84CXN-_",
			"data-mapping": "pathname",
			"data-strict": 0,
			"data-reactions-enabled": 0,
			"data-emit-metadata": 0,
			"data-input-position": "bottom",
			"data-theme": "preferred_color_scheme",
			"data-lang": "en",
			crossorigin: "anonymous",
			async: true,
		},
	],
});

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
	return queryCollection('blog').path(route.path).first()
})

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)

</script>

<template>
	<article
		class="article prose prose-img:rounded prose-img:shadow lg:prose-lg dark:prose-invert prose-aztec pt-10 prose-img:mx-auto">
		<ContentRenderer v-if="page" :value="page" />
		<div class="giscus"></div>
	</article>
</template>
