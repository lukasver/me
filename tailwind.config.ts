import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      listStyleType: {
        emoji: '✅',
      },
      dropShadow: {
        '2xl': '0 25px 25px hsl(237, 26%, 39%)',
        '3xl': '0 35px 35px hsl(236, 24%, 27%)',
        '4xl': [
          '0 0px 35px hsl(240, 21%, 60%)',
          '0 0px 65px hsl(240, 21%, 48%)',
          '0 0px 120px hsl(240, 21%, 24%)',
        ],
      },
      colors: {
        jade: {
          '50': 'hsl(168, 29%, 97%)',
          '100': 'hsl(164, 27%, 89%)',
          '200': 'hsl(161, 26%, 78%)',
          '300': 'hsl(165, 24%, 64%)',
          '400': 'hsl(168, 20%, 50%)',
          '500': 'hsl(168, 25%, 40%)',
          '600': 'hsl(170, 25%, 32%)',
          '700': 'hsl(170, 23%, 26%)',
          '800': 'hsl(172, 21%, 22%)',
          '900': 'hsl(167, 20%, 19%)',
          '950': 'hsl(175, 25%, 10%)',
        },
        vulcan: {
          '50': 'hsl(240, 33%, 97%)',
          '100': 'hsl(240, 25%, 94%)',
          '200': 'hsl(237, 27%, 86%)',
          '300': 'hsl(235, 26%, 74%)',
          '400': 'hsl(234, 25%, 60%)',
          '500': 'hsl(234, 24%, 48%)',
          '600': 'hsl(237, 26%, 39%)',
          '700': 'hsl(237, 26%, 32%)',
          '800': 'hsl(236, 24%, 27%)',
          '900': 'hsl(240, 21%, 24%)',
          '950': 'hsl(240, 22%, 10%)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        head: ['var(--font-cal)', ...fontFamily.sans],
        hand: ['var(--font-hand)', ...fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'swing-drop-in': {
          '0%': {
            transform: 'rotate(-30deg) translateY(-50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate(0deg) translateY(0)',
            opacity: '1',
          },
        },
        'blurred-fade-in': {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'swing-drop-in': 'swing-drop-in 0.6s ease-out',
        'blurred-fade-in': 'blurred-fade-in 0.9s ease-in-out',
        'fade-in': 'fade-in 1s ease-in',
        'fade-in-2': 'fade-in 2s ease-in',
        'fade-in-3': 'fade-in 3s ease-in',
        typing: 'typing 2s steps(20) 5 alternate, blink 1s 8',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
