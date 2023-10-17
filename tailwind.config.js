/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"dark",
			{
				lightwem: {
					"primary": "#9dbfdd",
					"secondary": "#ffe6cc",
					"accent": "#d79aea",
					"neutral": "#271627",
					"base-100": "#ffffff",
					"info": "#255cf4",
					"success": "#52eba8",
					"warning": "#f4d452",
					"error": "#fd765e",
				},
			},
			{
				lightem: {
					"primary": "#9dbfdd",
					"secondary": "#463aa1",
					"accent": "#d79aea",
					"neutral": "#021431",
					"base-100": "#ffffff",
					"info": "#93e6fb",
					"success": "#80ced1",
					"warning": "#efd8bd",
					"error": "#ef8b8b",
				},
			},
		],
	},
}
