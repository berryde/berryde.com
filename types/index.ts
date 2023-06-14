import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export {};

declare global {
	interface PostMetadata extends ParsedContent {
		image: string;
		_path: string;
		title: string;
		description: string;
		date: Date;
		tags: string;
	}
}
