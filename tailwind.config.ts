import type { Config } from "tailwindcss";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {

    extend: {

      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      fontSize: {
        display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
        h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
        h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
        h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
        h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
        h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
        h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
        "base-xl": ["var(--fs-base-xlarge)", { lineHeight: "var(--lh-base-xlarge)" },],
        "base-lg": ["var(--fs-base-large)", { lineHeight: "var(--lh-base-large)" },],
        base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
        "base-sm": ["var(--fs-base-small)", { lineHeight: "var(--lh-base-small)" }],
        "base-xs": ["var(--fs-base-xsmall)", { lineHeight: "var(--lh-base-xsmall)" }],
      },

      colors: {

        "beige-50": "var(--beige-200)",
        "beige-75": "var(--beige-500)",
        "beige-100": "var(--beige-800)",
        "beige-125": "var(--beige-900)",
        "complemenatry": "var(--complemenatry)",

        "black-50": "var(--black-50)",
        "black-75": "var(--black-75)",
        "black-100": "var(--black-100)",
        "black-125": "var(--black-125)",
        "black-150": "var(--black-150)",

        "white-50": "var(--white-50)",
        "white-100": "var(--white-100)",
        "white-125": "var(--white-125)",
        "white-150": "var(--white-150)",


        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      boxShadow: {
        'elevation-light': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',

        btn: 'rgba(50, 50, 93, 0.25) 0px 50px 50px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(184, 149, 81, 0.35) 0px 4px 6px 0px inset',
        
        'elevation-dark': 'rgba(0, 0, 0, 0.6) 0px 50px 100px -20px, rgba(0, 0, 0, 0.7) 0px 30px 60px -30px, rgba(0, 0, 0, 0.8) 0px -2px 6px 0px inset',

        'elevation-white': 'rgba(255, 255, 255, 0.25) 0px 20px 50px -20px, rgba(255, 255, 255, 0.3) 0px 30px 30px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset',

      },
      spacing: {
        'word-spacing': '0.1em', 
        'word-spacing-lg': '0.2em',
      },

    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config