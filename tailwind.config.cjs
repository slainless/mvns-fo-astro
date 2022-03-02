/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      'heading': ['Sansita', 'Montserrat'],
      'heading-alt': ['Poppins'],
      'body': ['Roboto', 'Poppins'],
    }
  }
}

module.exports = Config