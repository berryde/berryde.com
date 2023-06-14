<template>
	<article
		class="article prose prose-img:rounded prose-img:shadow lg:prose-lg prose-sky pt-10 prose-img:mx-auto"
	>
		<ContentDoc :path="`blog/${$route.params.post}`">
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
