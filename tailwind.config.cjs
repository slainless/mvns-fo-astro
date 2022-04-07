const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
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
        'enter-scaled': 'appear-scaled-up 300ms ease-out'
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
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
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