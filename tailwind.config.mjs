/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#a5f3fc',
        accent: '#ffb347',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        surface: {
          0: '#0b1220',
          1: '#0f172a',
          2: '#111827',
          3: '#1f2937',
        },
        text: {
          0: '#e5e7eb',
          1: '#cbd5e1',
          invert: '#0b1220',
        },
        ring: {
          accent: 'rgba(165, 243, 252, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Exo 2', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.3rem',
      },
      borderColor: {
        glass: 'var(--border-glass)',
        'glass-hover': 'var(--border-glass-hover)',
      },
    },
  },
  plugins: [],
};

