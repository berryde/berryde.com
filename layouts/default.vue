<script lang="ts" setup>
onBeforeMount(() => {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

	interface BrowserTheme {
		theme: string;
		background: string;
	}
	let theme: BrowserTheme = {
		theme: prefersDark.matches ? "#020617" : "#e0f2fe",
		background: prefersDark.matches ? "#082f49" : "#f0f9ff",
	};
	useHead({
		meta: [{ name: "theme-color", content: theme.theme }],
		bodyAttrs: {
			style: `background-color: ${theme.background}`,
		},
	});
});
</script>

<template>
	<div class="w-full bg-aztec-50 dark:bg-aztec-950 text-aztec-900 dark:text-aztec-200">
		<main class="min-h-screen flex flex-col max-w-3xl mx-auto p-5 pb-10 space-y-10">
			<Navbar></Navbar>
			<div class="flex flex-col flex-grow h-full flex-shrink-0">
				<slot />
			</div>
			<Copyright></Copyright>
		</main>
	</div>
</template>
