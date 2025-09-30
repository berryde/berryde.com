<template>
	<div class="flex text-aztec-700 dark:text-aztec-300 w-full justify-between items-center">
		<NuxtLink to="/">
			<div class="flex items-center space-x-2">
				<img class="w-5 h-5 rounded-sm" src="/favicon.svg" />
				<p class="font-medium">Dan Berry</p>
			</div>
		</NuxtLink>
		<div class="flex space-x-3">
			<NuxtLink to="/" class="hover:text-aztec-700 hover:underline transition-colors">About</NuxtLink>
			<p>|</p>
			<NuxtLink to="/blog" class="hover:text-aztec-700 hover:underline transition-colors">Blog</NuxtLink>
		</div>
	</div>
</template>
