// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],
	content: {},
	app: {
		head: {
			meta: [{ name: "theme-color", content: "#e0f2fe" }],
			bodyAttrs: {
				style: "background-color: #f0f9ff",
			},
		},
	},
});
