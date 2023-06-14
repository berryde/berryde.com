<template>
	<Navbar></Navbar>

	<article
		class="article prose prose-img:rounded prose-img:shadow lg:prose-lg prose-sky pt-10 prose-img:mx-auto"
	>
		<ContentDoc :path="`blog/post/${$route.params.post}`" />
	</article>
</template>
