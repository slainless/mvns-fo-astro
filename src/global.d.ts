declare module 'tailwind.config.cjs' {
  const ref: import('tailwindcss/tailwind-config').TailwindConfig
  export default ref
}

interface Window {
  USER: import('@Api/user').User
}
