import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			typography: ({ theme }: { theme: (k: string) => string }) => ({
				sky: {
					css: {
						"--tw-prose-headings": theme("colors.sky[800]"),
						"--tw-prose-lead": theme("colors.sky[800]"),
						"--tw-prose-links": theme("colors.sky[900]"),
						"--tw-prose-bold": theme("colors.sky[900]"),
						"--tw-prose-counters": theme("colors.sky[600]"),
						"--tw-prose-bullets": theme("colors.sky[400]"),
						"--tw-prose-hr": theme("colors.sky[300]"),
						"--tw-prose-quotes": theme("colors.sky[900]"),
						"--tw-prose-quote-borders": theme("colors.sky[300]"),
						"--tw-prose-captions": theme("colors.sky[700]"),
						"--tw-prose-code": theme("colors.sky[900]"),
						"--tw-prose-pre-code": theme("colors.sky[100]"),
						"--tw-prose-pre-bg": theme("colors.sky[900]"),
						"--tw-prose-th-borders": theme("colors.sky[300]"),
						"--tw-prose-td-borders": theme("colors.sky[200]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
