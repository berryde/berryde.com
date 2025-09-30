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
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
