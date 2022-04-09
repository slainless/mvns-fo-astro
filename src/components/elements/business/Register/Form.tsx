export { Field } from '@Blocks/Form'
import { Input as $Input, TextArea as $TextArea } from '@Blocks/Form'
import { createOverride } from '@Functions/jsx-factory'
import cntl from 'cntl'

export const Input = createOverride($Input, {
  mods: ['darker-icon', 'lightest-bg', 'whiter-border', 'focus-ring'],
  className: cntl`ring-offset-2 ring-offset-black`,
})

export const TextArea = createOverride($TextArea, {
  mods: ['darker-icon', 'lightest-bg', 'whiter-border', 'focus-ring'],
})
