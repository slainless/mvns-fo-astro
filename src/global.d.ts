declare module '@/tailwind.config.mjs' {
  const ref: import('tailwindcss/tailwind-config').TailwindConfig
  export default ref
}

declare module '*.md' {
  const ref: any
  export default ref
}
declare module '*.svg' {
  const ref: import('react').FunctionComponent
  export default ref
}

interface ImportMetaEnv {
  readonly PUBLIC_API_ROOT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
