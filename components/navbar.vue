<template>
	<div class="flex text-sky-700 w-full justify-between items-center">
		<NuxtLink to="/"
			><span
				><span class="font-bold">berry</span
				><span class="text-sky-700">de</span></span
			></NuxtLink
		>
		<div class="flex space-x-3">
			<NuxtLink
				to="/"
				class="hover:text-sky-900 hover:underline transition-colors"
				>About</NuxtLink
			>
			<p>|</p>
			<NuxtLink
				to="/blog"
				class="hover:text-sky-900 hover:underline transition-colors"
				>Blog</NuxtLink
			>
		</div>
	</div>
</template>
