import * as Checkbox from '@radix-ui/react-checkbox'
import cntl from 'cntl'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

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

const IndicatorStyle = cntl`
  absolute top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2
  flex justify-center items-center

  rounded-md box-content
  select-none 
  pointer-events-none
  w-full h-full

  bg-black text-white
  border-2 border-black/50
  
  group-focus:ring-1
`

type Props = Parameters<typeof Checkbox.Root>[0] & {
  icon?: string
  styleOverrides?: {
    container?: string
    indicator?: string
  }
}
export function Common(props: Props) {
  const { icon, className, styleOverrides } = props
  return (
    <Checkbox.Root
      className={twMerge(RootStyle, className, styleOverrides?.container)}
    >
      <Checkbox.Indicator
        className={twMerge(IndicatorStyle, styleOverrides?.indicator)}
      >
        <span className="material-icons-outlined">{icon ?? 'check'}</span>
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}
