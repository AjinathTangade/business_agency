/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
       
        shakeY: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateY(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateY(10px)",
          },
        },
        shakeTwo: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateY(-10px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateY(10px)",
          },
        },
        pulse: { 
          "20%, 40%, 60%, 80%": {
            opacity:1,
            transform: "scale(0.9)"
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "scale(0.8)",
          },
        },
        animName: {
          "0%":{
             transform: "rotate(0deg)",
            },
         "100%":{
             transform: "rotate(360deg)",
            }
         }
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shakeTwo: "shakeTwo 18s ease-in-out infinite",
        shakeY: "shakeY 20s ease-in-out infinite",
        pulse: "pulse 22s ease-in-out infinite",
        animName: "animName 6s linear infinite",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
