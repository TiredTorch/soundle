import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "playfair": ["var(--playfair)"],
      "alfa": ["var(--alfa)"],
    },
    extend: {
      width: {
        "max-view": "100dvw"
      },
      height: {
        "max-view": "100dvh"
      },
      maxWidth: {
        "max-view": "100dvw"
      },
      maxHeight: {
        "max-view": "100dvh"
      },
      minWidth: {
        "max-view": "100dvw"
      },
      minHeight: {
        "max-view": "100dvh"
      },
      colors: {
        "snd-gray": {
          100: "#F5F5DC",
          150: "#CCCCAD",
          200: "#A9A9A9",
          300: "#474747",
          500: "#333333",
          800: "#1E1E1E",
          900: "#0B0B0B"
        },
        "snd-red": {
          300: "#D11F25",
          700: "#800020"
        }
      }
    }
  },
  plugins: [],
}
export default config
