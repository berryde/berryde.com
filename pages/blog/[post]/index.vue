<script setup>
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
</script>

<template>
	<article
		class="article prose prose-img:rounded prose-img:shadow lg:prose-lg dark:prose-invert prose-sky pt-10 prose-img:mx-auto"
	>
		<ContentDoc v-if="$route.params.post" :path="`blog/${$route.params.post}`">
			<template v-slot="{ doc }">
				<ContentRenderer :value="doc" />
				<div class="giscus"></div>
			</template>
			<template #not-found>
				<h1><Icon name="ion:telescope"></Icon> Document not found</h1>
				<p>
					There is no blog post with the name
					<code>{{ $route.params.post }}</code
					>. If you think this is a mistake, please
					<a href="mailto:website@berryde.com">let me know</a> and I will do my
					best to resolve it.
				</p>
			</template>
		</ContentDoc>
	</article>
</template>
