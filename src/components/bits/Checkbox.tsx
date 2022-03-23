import * as Checkbox from '@radix-ui/react-checkbox'
import cntl from 'cntl'
import { useState } from 'react'

const RootStyle = cntl`
  w-6 h-6
  border-2 border-black/50
  flex items-center justify-center
  hover:bg-black/10
  group
  focus:ring-1
  outline-none
  rounded-md
  relative
`

type Props = Parameters<typeof Checkbox.Root>[0]
export function Common(props: Props) {
  return (
    <Checkbox.Root className={RootStyle}>
      <Checkbox.Indicator
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-focus:ring-1 rounded-md box-content 
  border-2 border-black/50 select-none pointer-events-none w-full h-full bg-black text-white flex justify-center items-center"
      >
        <span className="material-icons-outlined">check</span>
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}
