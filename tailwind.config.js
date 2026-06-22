/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#F4F1EC',
          100: '#E8E2D8',
          200: '#D3C7B3',
          300: '#B8A685',
          400: '#8B7355',
          500: '#5C5347',
          600: '#3D3A35',
          700: '#2D2B27',
          800: '#27344A',
          900: '#1A2233',
          950: '#10151F',
        },
        accent: {
          50:  '#FBF0EC',
          100: '#F5DACF',
          200: '#E9B6A5',
          300: '#D88E72',
          400: '#C4734F',
          500: '#B5654A',
          600: '#9A5440',
          700: '#7D4434',
          800: '#5F342A',
          900: '#452620',
          950: '#2B1714',
        },
        gold: {
          50:  '#FBF6EC',
          100: '#F3E7CC',
          200: '#E6CE9C',
          300: '#D9B66E',
          400: '#D4B679',
          500: '#BF9B5E',
          600: '#A6824A',
          700: '#876539',
          800: '#664C2B',
          900: '#473420',
        },
        gray: {
          50:  '#FBF8F2',
          100: '#F3EEE3',
          200: '#E5DCC9',
          300: '#D1C3A8',
          400: '#A99886',
          500: '#7A7670',
          600: '#5F5C57',
          700: '#4A4A45',
          800: '#33312D',
          900: '#211F1C',
          950: '#141312',
        },
        sage: {
          100: '#E3E8D9',
          500: '#7A8B5E',
          600: '#637249',
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Lora', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'breathe': 'breathe 2.5s ease-in-out infinite',
        'photo-glow': 'photoGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(39, 52, 74, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(39, 52, 74, 0)' },
        },
        photoGlow: {
          '0%, 100%': { boxShadow: '0 0 0 4px rgba(191, 155, 94, 0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(191, 155, 94, 0)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}