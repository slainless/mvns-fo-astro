/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const Config = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md,mdx}',
  ],
  theme: {
    fontFamily: {
      'heading': ['Sansita', 'Montserrat'],
      'heading-alt': ['Poppins'],
      'body': ['Roboto', 'Poppins'],
      'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    }
  }
}

module.exports = Config