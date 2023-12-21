import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "snd-gray": {
          100: "#F5F5DC",
          200: "#A9A9A9",
          300: "#474747",
          500: "#333333",
          800: "#1E1E1E",
          900: "#0B0B0B"
        },
        "snd-red": {
          700: "#800020"
        }
      }
    }
  },
  plugins: [],
}
export default config
