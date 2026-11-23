/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#0a0a0f",
          dark: "#12121a",
          pink: "#ff2a6d",
          purple: "#b967ff",
          cyan: "#05d9e8",
          green: "#a6ff00",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "neon-pulse": "neonPulse 2s ease-in-out infinite alternate",
        "border-flow": "borderFlow 3s linear infinite",
        glitch: "glitch 2.5s infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        neonPulse: {
          "0%": { textShadow: "0 0 5px #ff2a6d, 0 0 15px #ff2a6d" },
          "100%": { textShadow: "0 0 10px #ff2a6d, 0 0 30px #ff2a6d, 0 0 50px #ff2a6d" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      boxShadow: {
        "neon-pink": "0 0 5px #ff2a6d, 0 0 20px #ff2a6d, 0 0 40px rgba(255,42,109,0.4)",
        "neon-cyan": "0 0 5px #05d9e8, 0 0 20px #05d9e8, 0 0 40px rgba(5,217,232,0.4)",
        "neon-purple": "0 0 5px #b967ff, 0 0 20px #b967ff, 0 0 40px rgba(185,103,255,0.4)",
        "neon-green": "0 0 5px #a6ff00, 0 0 20px #a6ff00, 0 0 40px rgba(166,255,0,0.4)",
      },
    },
  },
  plugins: [],
};