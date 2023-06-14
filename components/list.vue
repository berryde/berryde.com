<script setup lang="ts">
interface Props {
	items: string[];
}
defineProps<Props>();
</script>

<template>
	<ul
		class="font-mono text-sky-800 dark:text-sky-100 grid grid-cols-2 md:grid-cols-3"
	>
		<li v-for="item in items" class="before:content-['▹'] before:mr-2">
			{{ item }}
		</li>
	</ul>
</template>
