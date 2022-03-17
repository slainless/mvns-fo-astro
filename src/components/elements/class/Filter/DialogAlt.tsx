import { Transition, Dialog } from '@headlessui/react'
import { ReactNode, ReactElement, useState, Fragment } from 'react'
import { Root as Separator } from '@radix-ui/react-separator'
import { twMerge } from 'tailwind-merge'

// type PrimitiveProps = Parameters<typeof Dialog_.Root>[0]
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

export type OptionalProps = Partial<DialogProps>

export default function TheDialog(props: DialogProps) {
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

  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="contents" onClick={() => setIsOpen(true)}>
        {trigger}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto text-black "
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/80" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
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
                <Dialog.Title
                  as="h3"
                  className={twMerge(
                    'tracking-wide text-lg px-4 text-red-600 font-bold font-heading',
                    styleOverrides?.title
                  )}
                >
                  {title}
                </Dialog.Title>
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
