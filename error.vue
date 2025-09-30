<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();
useSeoMeta({ title: `${error.message}` });
</script>

<template>
	<NuxtLayout>
		<article
			class="article prose prose-img:rounded prose-img:shadow lg:prose-lg dark:prose-invert prose-aztec pt-10 prose-img:mx-auto">
			<h1>
				<Icon name="ion:build"></Icon> {{ error.statusCode }}
			</h1>
			The following error was thrown: <code>{{ error.statusMessage }}</code>. If you think this is a mistake,
			please
			<a href="mailto:website@berryde.com">let me know</a> and I will do my best
			to resolve it.
		</article>
	</NuxtLayout>
</template>
