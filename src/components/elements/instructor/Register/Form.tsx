export { Field } from '@Blocks/Form'
import {
  Input as $Input,
  Tagger as $Tagger,
  TextArea as $TextArea,
} from '@Blocks/Form'
// import { Common as $Input } from '@Bits/Input'
import { createOverride } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

export const Input = createOverride($Input, {
  mods: ['darker-bg', 'whiter-border', 'focus-ring'],
  className: cntl`ring-offset-2 ring-offset-zinc-900`,
})

export const Tagger = createOverride($Tagger, {
  mods: [
    'darker-bg',
    'whiter-border',
    'hover-whiter-border',
    'focus-whiter-border',
    'focus-ring',
  ],
  className: cntl`ring-offset-2 ring-offset-zinc-900`,
})

export const TextArea = createOverride($TextArea, {
  mods: ['darker-bg', 'whiter-border', 'focus-ring'],
  className: cntl`ring-offset-2 ring-offset-zinc-900`,
})
