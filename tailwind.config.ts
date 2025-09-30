import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				aztec: {
					"50": "#f3faf8",
					"100": "#d8efe9",
					"200": "#b1ded4",
					"300": "#82c6b9",
					"400": "#58a99c",
					"500": "#3f8d83",
					"600": "#307169",
					"700": "#2a5b56",
					"800": "#254a47",
					"900": "#223f3c",
					"950": "#031211",
				},
			},
			typography: ({ theme }: { theme: (k: string) => string }) => ({
				aztec: {
					css: {
						"--tw-prose-headings": theme("colors.aztec[800]"),
						"--tw-prose-lead": theme("colors.aztec[800]"),
						"--tw-prose-links": theme("colors.aztec[900]"),
						"--tw-prose-bold": theme("colors.aztec[900]"),
						"--tw-prose-counters": theme("colors.aztec[600]"),
						"--tw-prose-bullets": theme("colors.aztec[400]"),
						"--tw-prose-hr": theme("colors.aztec[300]"),
						"--tw-prose-quotes": theme("colors.aztec[900]"),
						"--tw-prose-quote-borders": theme("colors.aztec[300]"),
						"--tw-prose-captions": theme("colors.aztec[700]"),
						"--tw-prose-code": theme("colors.aztec[900]"),
						"--tw-prose-pre-code": theme("colors.aztec[100]"),
						"--tw-prose-pre-bg": theme("colors.aztec[900]"),
						"--tw-prose-th-borders": theme("colors.aztec[300]"),
						"--tw-prose-td-borders": theme("colors.aztec[200]"),
						// invert
						"--tw-prose-invert-headings": theme("colors.aztec[300]"),
						"--tw-prose-invert-lead": theme("colors.aztec[200]"),
						"--tw-prose-invert-links": theme("colors.aztec[200]"),
						"--tw-prose-invert-bold": theme("colors.aztec[300]"),
						"--tw-prose-invert-counters": theme("colors.aztec[400]"),
						"--tw-prose-invert-bullets": theme("colors.aztec[600]"),
						"--tw-prose-invert-hr": theme("colors.aztec[700]"),
						"--tw-prose-invert-quotes": theme("colors.aztec[200]"),
						"--tw-prose-invert-quote-borders": theme("colors.aztec[700]"),
						"--tw-prose-invert-captions": theme("colors.aztec[300]"),
						"--tw-prose-invert-code": theme("colors.aztec[200]"),
						"--tw-prose-invert-pre-code": theme("colors.aztec[900]"),
						"--tw-prose-invert-pre-bg": theme("colors.aztec[200]"),
						"--tw-prose-invert-th-borders": theme("colors.aztec[700]"),
						"--tw-prose-invert-td-borders": theme("colors.aztec[800]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
