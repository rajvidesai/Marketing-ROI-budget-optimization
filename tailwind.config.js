/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        'surface-strong': 'hsl(var(--surface-strong) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
      },
      fontFamily: {
        body: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(7, 18, 33, 0.12)',
        glass: '0 20px 60px rgba(12, 18, 31, 0.14)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(29, 78, 216, 0.18), transparent 42%), radial-gradient(circle at top right, rgba(20, 184, 166, 0.12), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
