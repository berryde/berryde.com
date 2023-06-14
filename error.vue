<script setup lang="ts">
import { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
useSeoMeta({ title: `${error.message}` });
</script>

<template>
	<NuxtLayout>
		<main
			class="article prose prose-img:rounded prose-img:shadow lg:prose-lg prose-sky pt-10 prose-img:mx-auto"
		>
			<h1><Icon name="ion:build"></Icon> {{ error.statusCode }}</h1>
			The following error was thrown: <code>{{ error.statusMessage }}</code
			>. If you think this is a mistake, please
			<a href="mailto:website@berryde.com">let me know</a> and I will do my best
			to resolve it.
		</main>
	</NuxtLayout>
</template>
