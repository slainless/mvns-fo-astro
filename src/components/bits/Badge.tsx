import { createSingleton } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const BaseStyle = cntl`
  badge w-max text-xs px-3 py-1 rounded-full
`

export const Badge = createSingleton('span', {
  class: twMerge(
    BaseStyle,
    cntl`
    bg-white text-black
  `
  ),
})

export const InvertedBadge = createSingleton('span', {
  class: twMerge(
    BaseStyle,
    cntl`
      bg-transparent text-white border-2 border-white
    `
  ),
})
