/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Black background
        neonPurple: "#8D00FF", // Vibrant neon purple
        neonCyan: "#00F5D4", // Glowing neon cyan
        neonMagenta: "#FF3F81", // Neon magenta for accents
        bodyText: "#E0E0E0", // Light grey for readability
      },
    },
  },
  plugins: [],
};
