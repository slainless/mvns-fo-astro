const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        header: '5rem'
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
    plugin(function ({ addVariant }) {
      addVariant('selected', '&[aria-selected=true]')
    })
  ]
}

module.exports = Config