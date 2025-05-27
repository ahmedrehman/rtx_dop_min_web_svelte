import { fontFamily } from "tailwindcss/defaultTheme";
import daisyui from "daisyui";
 
/** @type {import('tailwindcss').Config} */
const config = {
	//prefix: "tw-",
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},

	// plugins: [daisyui],
	// daisyui: {
	//   styled: true,
	//   themes: [
	// 	"light",
	// 	"dark",
	// 	"cupcake",
	// 	"bumblebee",
	// 	"emerald",
	// 	"synthwave",
	// 	"halloween",
	// 	"forest",
	// 	"aqua",
	// 	"pastel",
	// 	"fantasy",
	// 	"luxury",
	// 	"dracula",
	// 	"cmyk",
	// 	"autumn",
	// 	"business",
	// 	"corporate",
	// 	"acid",
	// 	"lemonade",
	// 	"night",
	// 	"coffee",
	// 	"winter",
	// 	"lofi",
	// 	"wireframe",
	//   ],
	//   base: true,
	//   utils: true,
	//   prefix: "dy-", // 👈 DaisyUI classes prefixed with dy-
	// },
};

export default config;
