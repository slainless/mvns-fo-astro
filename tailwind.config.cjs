const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const screens = require('./src/styles/screen.cjs')

const pluginLineClamp = require('@tailwindcss/line-clamp')
const pluginTypography = require('@tailwindcss/line-clamp')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}',
  ],
  theme: {
    screens,
    extend: {
      spacing: {
        header: '5rem',
        'header-sm': '4rem'
      },
      fontFamily: {
        'display': ['Big Shoulders Display', 'Impact'],
        'heading': ['Poppins'],
        'body': ['Inter', 'Poppins'],
        'mono': '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      },
      animation: {
        'enter-scaled-up': 'appear-scaled-up 300ms ease-out',
        'exit-scaled-down': 'disappear-scaled-down 300ms ease-out',
        'enter-slide-up': 'appear-slide-up 300ms ease-out',
        'exit-slide-down': 'disappear-slide-down 300ms ease-out',
      },
      keyframes: {
        'appear-scaled-up': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        'disappear-scaled-down': {
          '0%': {
            opacity: 1,
            transform: 'scale(1)'
          },
          '100%': {
            opacity: 0,
            transform: 'scale(0.95)'
          }
        },
        'appear-slide-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(4rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'disappear-slide-down': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(4rem)'
          }
        }
      }
    }
  },
  plugins: [
    pluginLineClamp,
    pluginTypography,
    plugin(function ({ addVariant }) {
      addVariant('selected', '&[aria-selected=true]'),
      addVariant('opened', '&[data-state="open"]'),
      addVariant('closed', '&[data-state="closed"]'),
      addVariant('expanded', '&[aria-expanded=true]'),
      addVariant('placeholder-not-shown', '&:not(:placeholder-shown)'),
      addVariant('aria-invalid', '&[aria-invalid=true]')
    })
  ]
}

module.exports = Config