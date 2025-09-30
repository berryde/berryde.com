import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			schema: z.object({
				image: z.string(),
				title: z.string(),
				description: z.string(),
				date: z.date(),
				tags: z.array(z.string()),
			}),
		}),
	},
});
