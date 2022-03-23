import { Common as Button, Link } from '@Bits/Button'
import * as Popover_ from '@radix-ui/react-popover'
import { Root as Separator } from '@radix-ui/react-separator'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ReactNode, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type PrimitiveProps = Parameters<typeof Popover_.Root>[0]
type PopoverProps = {
  trigger: ReactElement
  title: string
  desc?: string
  children?: ReactNode
  hideTitle?: boolean
  className?: string
  styleOverrides?: {
    card?: string
    title?: string
    desc?: string
    content?: string
  }
  onReset?: () => void
  onApply?: () => void
}

export type OptionalProps = Partial<PopoverProps> & PrimitiveProps

export default function Popover(props: PopoverProps & PrimitiveProps) {
  const {
    onReset,
    onApply,
    hideTitle,
    trigger,
    title,
    children,
    desc,
    styleOverrides,
    className,
    ...rest
  } = props
  return (
    <Popover_.Root {...rest}>
      <Popover_.Trigger asChild>{trigger}</Popover_.Trigger>
      <Popover_.Content
        sideOffset={5}
        className="-z-50 flex items-center justify-center pointer-events-none 
        animate-enter-scaled relative"
      >
        <div
          className={twMerge(
            `
            w-max h-max 
          bg-white text-black rounded-2xl shadow-md drop-shadow-md
            flex flex-col gap-3
            max-w-md
            pointer-events-auto
          `,
            styleOverrides?.card
          )}
        >
          <div
            className={twMerge(
              'filter-content py-4 pt-16 px-12 ',
              styleOverrides?.content,
              className
            )}
          >
            {children}
          </div>
          <div className="filter-footer justify-between flex gap-10 items-center px-4 py-4 border-t-[1px] ">
            <Button
              className="border-transparent hover:translate-y-0 underline underline-offset-2 font-bold hover:bg-red-600 hover:shadow-red-600/30"
              onClick={onReset}
            >
              Reset
            </Button>
            <Button className="hover:translate-y-0 bg-black border-black hover:text-white hover:bg-red-600 hover:border-red-600 text-white hover:shadow-red-600/30">
              Filter
            </Button>
          </div>
          <Popover_.Close
            className="w-6 h-6 rounded-full hover:bg-red-200 hover:text-red-600 absolute top-4 right-4 z-1 text-black flex items-center justify-center"
            aria-label="Close"
          >
            <span className="material-icons-outlined">close</span>
          </Popover_.Close>
        </div>
        <Popover_.Arrow className="fill-white" />
      </Popover_.Content>
    </Popover_.Root>
  )
}
