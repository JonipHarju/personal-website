import type { Config } from "tailwindcss"


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-purple': '#a500ff',
        'neon-blue': '#00ffff',
        'neon-green': '#00ff00',
        'neon-yellow': '#ffff00',
        'neon-orange': '#ff9900',
        'neon-red': '#ff0033',
        'neon-cyan': '#00ffff',
        'neon-magenta': '#ff00ff',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = (theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}



export default config