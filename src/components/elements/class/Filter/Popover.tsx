import { Common as Button, Link } from '@Bits/Button'
import * as Popover_ from '@radix-ui/react-popover'
import { Root as Separator } from '@radix-ui/react-separator'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import cntl from 'cntl'
import { ReactNode, ReactElement, useState, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import './Popover.css'

type PrimitiveProps = Parameters<typeof Popover_.Root>[0]
type PopoverProps = {
  trigger?: ReactElement
  title: string
  desc?: string
  children?: ReactNode
  hideTitle?: boolean
  className?: string
  styleOverrides?: {
    container?: string
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
  // const [open, setOpen] = useState(false)
  // const contentRef = useRef<HTMLDivElement>(null)
  // const [closing, setClosing] = useState(false)

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
    <Popover_.Root
      // open={open}
      // onOpenChange={(v) => {
      //   const target = contentRef.current
      //   if (target == null) {
      //     setOpen(v)
      //     return
      //   }

      //   if (v === false) {
      //     if (closing) return
      //     setClosing(true)
      //     setTimeout(() => {
      //       setOpen(false)
      //       setClosing(false)
      //     }, 300)
      //     return
      //   }
      // }}
      {...rest}
    >
      {trigger ? <Popover_.Trigger asChild>{trigger}</Popover_.Trigger> : <></>}
      <Popover_.Content
        // ref={contentRef}
        sideOffset={5}
        className={twMerge(
          'popover-content',
          'z-50 flex justify-center items-end w-full h-full fixed bottom-0',
          'sm:w-max sm:h-max sm:static sm:items-center',

          'pointer-events-none',
          // closing
          //   ? 'animate-exit-slide-down sm:animate-exit-scaled-down'
          //   : 'animate-enter-slide-up sm:animate-enter-scaled-up',
          'animate-enter-slide-up sm:animate-enter-scaled-up',
          styleOverrides?.container
        )}
        // forceMount={true}
      >
        <div
          className={twMerge(
            'popover-card',
            'h-max max-w-sm bg-white text-black rounded-lg',
            'w-full rounded-lg rounded-b-none',
            'sm:w-auto sm:rounded-lg sm:rounded-b-lg',
            'shadow-md drop-shadow-md',
            'flex flex-col gap-3',
            'pointer-events-auto',
            styleOverrides?.card
          )}
        >
          <div
            className={twMerge(
              'filter-content py-4 sm:pt-16',
              'max-w-full px-8 xs:px-12',
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
          <div className="flex sm:contents order-first border-b-[1px] px-3 py-3 justify-end">
            <Popover_.Close
              className="w-6 h-6 rounded-full hover:bg-red-200 hover:text-red-600 sm:absolute top-4 right-4 z-1 text-black flex items-center justify-center"
              aria-label="Close"
            >
              <span className="material-icons-outlined">close</span>
            </Popover_.Close>
          </div>
        </div>
        <Popover_.Arrow className="popover-arrow fill-white !hidden sm:!block" />
      </Popover_.Content>
    </Popover_.Root>
  )
}
