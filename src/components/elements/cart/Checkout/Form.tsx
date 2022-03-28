export { Field } from '@Blocks/Form'
import { Input as $Input, TextArea as $TextArea } from '@Blocks/Form'
import { createOverride } from '@Functions/jsx-factory'

export const Input = createOverride($Input, {
  mods: ['darker-icon', 'lightest-bg', 'whiter-border', 'focus-ring'],
})

export const TextArea = createOverride($TextArea, {
  mods: ['darker-icon', 'lightest-bg', 'whiter-border', 'focus-ring'],
})
