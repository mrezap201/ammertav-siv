/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        ink: '#040414',
        fg: '#ffffff',
        'fg-muted': '#d0d0d0',
        'accent-pink': '#ef00fc',
        'accent-violet': '#7b2cff',
        'brand-purple': '#6a00ff',
        'brand-violet': '#9d4edd',
        'brand-violet-light': '#c77dff',
        surface: 'rgba(255, 255, 255, 0.04)',
        'surface-border': 'rgba(255, 255, 255, 0.08)',
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        page: 'clamp(16px, 5vw, 80px)',
        section: 'clamp(64px, 8vw, 120px)',
      },
      screens: {
        '3xl': '1440px',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'client-slide': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
        'client-slide-mobile': 'client-slide 16s linear infinite',
        'client-slide-tablet': 'client-slide 20s linear infinite',
        'client-slide-desktop': 'client-slide 22s linear infinite',
        'client-slide-mid': 'client-slide 24s linear infinite',
        'client-slide-large': 'client-slide 28s linear infinite',
      },
    },
  },
  plugins: [],
}
