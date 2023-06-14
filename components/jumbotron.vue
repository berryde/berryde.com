<script setup></script>

<template>
	<div class="flex flex-col py-8 items-center relative">
		<nuxt-img
			src="img/pp.png"
			class="rounded-full h-40 w-40 z-10 my-5"
			alt="a portrait of me"
		></nuxt-img>
		<p class="text-2xl font-bold">👋 Hello! I'm Dan Berry.</p>
		<p class="text-lg max-w-xs text-center leading-6 text-sky-900">
			I am a Software Engineer at<br />
			Palantir Technologies, London.
		</p>
		<div class="flex space-x-5 pt-5 text-xl text-sky-700">
			<a href="https://www.linkedin.com/in/berryde/"
				><Icon name="ion:logo-linkedin"></Icon
			></a>
			<a href="mailto:dan@berryde.com"><Icon name="ion:mail"></Icon></a>
			<a href="https://github.com/berryde"
				><Icon name="ion:logo-github"></Icon
			></a>
		</div>
	</div>
</template>
