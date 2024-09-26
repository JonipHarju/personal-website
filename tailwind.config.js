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
        background: "#000000", // Pure black background
        neonPurple: "#8D00FF", // Vibrant neon purple
        neonPink: "#FF006E", // Bright neon pink
        neonCyan: "#00F5D4", // Glowing neon cyan
        neonBlue: "#0E7DEC", // Synthwave neon blue
        neonMagenta: "#FF3F81", // Intense neon magenta
        neonYellow: "#FFDC00", // Warm neon yellow for highlights
        deepPurple: "#2A1A4C", // Dark purple for depth
        sunsetOrange: "#FF4E00", // Synthwave sunset orange for accents
        bodyText: "#E0E0E0", // Light grey for body text for readability
      },
    },
  },
  plugins: [],
};
