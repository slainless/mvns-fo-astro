import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
  theme: {
    spacing: ['header', 'header-sm'],
  },
})
