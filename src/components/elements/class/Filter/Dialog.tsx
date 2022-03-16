import * as Dialog_ from '@radix-ui/react-dialog'
import { Root as Separator } from '@radix-ui/react-separator'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ReactNode, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type PrimitiveProps = Parameters<typeof Dialog_.Root>[0]
type DialogProps = {
  trigger: ReactElement
  title: string
  desc?: string
  children?: ReactNode
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

export type OptionalProps = Partial<DialogProps> & PrimitiveProps

export default function Dialog(props: DialogProps & PrimitiveProps) {
  const {
    onReset,
    onApply,
    trigger,
    title,
    children,
    desc,
    styleOverrides,
    className,
    ...rest
  } = props
  return (
    <Dialog_.Root {...rest}>
      <Dialog_.Trigger asChild>{trigger}</Dialog_.Trigger>
      <Dialog_.Portal className="filter-dialog">
        <Dialog_.Overlay className="bg-black/80 h-full w-full fixed z-40" />
        <Dialog_.Content
          className={twMerge(
            `
            inset-0 fixed z-50 w-max 
            h-max left-1/2 top-1/2 
            -translate-x-1/2  -translate-y-1/2
            bg-slate-50 text-black rounded-2xl shadow-md drop-shadow-md
            pb-4 pt-8 px-8 flex flex-col gap-3
            max-w-md
          `,
            styleOverrides?.card
          )}
        >
          <Dialog_.Title
            className={twMerge(
              'tracking-wide text-lg px-4 font-medium',
              styleOverrides?.title
            )}
          >
            {title}
          </Dialog_.Title>
          <VisuallyHidden>
            <Dialog_.Description>{desc}</Dialog_.Description>
          </VisuallyHidden>
          <div
            className={twMerge(
              'filter-content px-4',
              styleOverrides?.content,
              className
            )}
          >
            {children}
          </div>
          <Separator className="h-[1px] w-full bg-black/10 mt-5" />
          <div className="filter-footer justify-between flex gap-10">
            <button
              className="underline font-bold tracking-wide underline-offset-2"
              onClick={onReset}
            >
              Reset
            </button>
            <button
              onClick={onApply}
              className="border-[1px] border-gray-200 rounded-lg shadow-lg drop-shadow-lg font-bold tracking-widest uppercase px-9 py-1 text-red-500"
            >
              Filter
            </button>
          </div>
        </Dialog_.Content>
      </Dialog_.Portal>
    </Dialog_.Root>
  )
}
