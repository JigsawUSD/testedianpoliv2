/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Di Napoli Design System - Single source of truth
        surface: '#fff8f7',
        'surface-dim': '#ecd5d3',
        'surface-bright': '#fff8f7',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fff0ef',
        'surface-container': '#ffe9e7',
        'surface-container-high': '#fae3e1',
        'surface-container-highest': '#f5dddb',
        'on-surface': '#251918',
        'on-surface-variant': '#584140',
        'inverse-surface': '#3b2d2c',
        'inverse-on-surface': '#ffedeb',
        outline: '#8c716f',
        'outline-variant': '#dfbfbd',
        'surface-tint': '#ab3334',
        primary: '#942225',
        'on-primary': '#ffffff',
        'primary-container': '#b53a3a',
        'on-primary-container': '#ffdcd9',
        'inverse-primary': '#ffb3ae',
        secondary: '#904c2e',
        'on-secondary': '#ffffff',
        'secondary-container': '#fea682',
        'on-secondary-container': '#78391d',
        tertiary: '#6c4525',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#875c3b',
        'on-tertiary-container': '#ffdec7',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#ffdad7',
        'primary-fixed-dim': '#ffb3ae',
        'on-primary-fixed': '#410005',
        'on-primary-fixed-variant': '#8a1a1f',
        'secondary-fixed': '#ffdbce',
        'secondary-fixed-dim': '#ffb598',
        'on-secondary-fixed': '#370e00',
        'on-secondary-fixed-variant': '#733519',
        'tertiary-fixed': '#ffdcc4',
        'tertiary-fixed-dim': '#f2bb93',
        'on-tertiary-fixed': '#2f1500',
        'on-tertiary-fixed-variant': '#643e1f',
        background: '#fff8f7',
        'on-background': '#251918',
        'surface-variant': '#f5dddb'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px'
      },
      spacing: {
        'margin-desktop': '80px',
        'margin-mobile': '24px',
        gutter: '32px',
        'stack-sm': '12px',
        'stack-md': '20px',
        'stack-lg': '40px',
        'stack-xl': '80px',
        'container-max': '1440px'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        ui: ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'ui-label': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '600' }],
        'ui-small': ['12px', { lineHeight: '16px', fontWeight: '500' }]
      },
      boxShadow: {
        'card': '0 4px 20px rgba(47, 47, 47, 0.05)',
        'card-hover': '0 12px 30px rgba(47, 47, 47, 0.08)',
        'elevated': '0 20px 40px rgba(47, 47, 47, 0.1)'
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'reveal': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1200': '1200ms'
      },
      animation: {
        'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'blur-reveal': 'blurReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        reveal: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' }
        },
        blurReveal: {
          '0%': { filter: 'blur(20px)', opacity: '0', transform: 'translateY(30px)' },
          '100%': { filter: 'blur(0)', opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ambient': 'radial-gradient(circle at 50% 50%, rgba(181, 58, 58, 0.03) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        'timeline': 'linear-gradient(to bottom, transparent, #ab3334 15%, #ab3334 85%, transparent)'
      }
    }
  },
  plugins: []
};