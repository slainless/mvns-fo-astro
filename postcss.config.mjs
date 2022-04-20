import tailwind from 'tailwindcss'
import nested from 'tailwindcss/nesting/index.js'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.mjs'

export default {
  plugins: [
    nested, 
    tailwind(tailwindConfig), 
    autoprefixer
  ]
}