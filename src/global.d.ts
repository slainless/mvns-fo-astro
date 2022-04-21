declare module '@/tailwind.config.cjs' {
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

declare const tw: import('@Functions/tailwind')

interface ImportMetaEnv {
  readonly PUBLIC_API_ROOT: string
  readonly MODE: 'production' | 'development'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
