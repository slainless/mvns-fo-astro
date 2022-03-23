import { Common as Button, Link } from '@Bits/Button'
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

export type OptionalProps = Partial<DialogProps> & PrimitiveProps

export default function Dialog(props: DialogProps & PrimitiveProps) {
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
    <Dialog_.Root {...rest}>
      <Dialog_.Trigger asChild>{trigger}</Dialog_.Trigger>
      <Dialog_.Portal className="filter-dialog hidden">
        <Dialog_.Overlay className="bg-black/80 h-full w-full fixed z-40" />
        <Dialog_.Content className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-50 flex items-center justify-center pointer-events-none">
          <div
            className={twMerge(
              `
            w-max h-max 
          bg-white text-black rounded-2xl shadow-md drop-shadow-md
            flex flex-col gap-3
            max-w-md
            animate-enter-scaled
            pointer-events-auto
          `,
              styleOverrides?.card
            )}
          >
            {hideTitle ? (
              <VisuallyHidden>
                <Dialog_.Title>{title}</Dialog_.Title>
              </VisuallyHidden>
            ) : (
              <>
                <Dialog_.Title
                  className={twMerge(
                    'tracking-wide text-lg font-bold font-heading px-12 py-5 border-b-[1px] ',
                    styleOverrides?.title
                  )}
                >
                  {title}
                </Dialog_.Title>
                <Dialog_.Close
                  className="w-6 h-6 rounded-full hover:bg-red-200 hover:text-red-600 absolute top-4 right-4 z-1 text-black flex items-center justify-center"
                  aria-label="Close"
                >
                  <span className="material-icons-outlined">close</span>
                </Dialog_.Close>
              </>
            )}
            <VisuallyHidden>
              <Dialog_.Description>{desc}</Dialog_.Description>
            </VisuallyHidden>
            <div
              className={twMerge(
                'filter-content py-4 px-12 ',
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
          </div>
        </Dialog_.Content>
      </Dialog_.Portal>
    </Dialog_.Root>
  )
}
