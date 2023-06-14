<template>
	<div class="w-full bg-sky-50 text-sky-900">
		<main
			class="min-h-screen flex flex-col max-w-3xl mx-auto p-5 pb-10 space-y-10"
		>
			<Navbar></Navbar>
			<div class="flex flex-col flex-grow h-full flex-shrink-0"><slot /></div>
			<Copyright></Copyright>
		</main>
	</div>
</template>
