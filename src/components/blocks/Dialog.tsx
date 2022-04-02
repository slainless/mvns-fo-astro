import * as Dialog_ from '@radix-ui/react-dialog'
import { Root as Separator } from '@radix-ui/react-separator'
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ReactNode, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

type PrimitiveProps = Parameters<typeof Dialog_.Root>[0]
type CommonProps = {
  trigger: ReactElement
  title: string
  hideTitle?: boolean
  hideDesc?: boolean
  desc?: string
  children?: ReactNode
  className?: string
  styleOverrides?: {
    card?: string
    title?: string
    desc?: string
    content?: string
    overlay?: string
  }
}

export type OptionalProps = Partial<CommonProps> & PrimitiveProps

export default function Dialog(
  props: CommonProps & PrimitiveProps & HTMLAttr<'div'>
) {
  const {
    trigger,
    title,
    hideTitle,
    hideDesc,
    children,
    desc,
    styleOverrides,
    className,
    open,
    defaultOpen,
    onOpenChange,
    modal,
    allowPinchZoom,
    ...rest
  } = props

  return (
    <Dialog_.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
      allowPinchZoom={allowPinchZoom}
    >
      <Dialog_.Trigger asChild>{trigger}</Dialog_.Trigger>
      <Dialog_.Portal className="filter-dialog hidden">
        <Dialog_.Overlay
          className={twMerge(
            'bg-black/80 h-full w-full fixed z-40',
            styleOverrides?.overlay
          )}
        />
        <Dialog_.Content
          className={twMerge(
            'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-50 flex items-center justify-center pointer-events-none rounded-lg',
            styleOverrides?.content
          )}
        >
          <div
            className={twMerge(
              `
            w-max h-max 
            bg-white text-black rounded-2xl shadow-md drop-shadow-md
            py-8 px-8 flex flex-col gap-3
            max-w-md
            animate-enter-scaled
            pointer-events-auto
          `,
              styleOverrides?.card
            )}
          >
            {hideTitle || title === '' || title == null ? (
              <VisuallyHidden>
                <Dialog_.Title></Dialog_.Title>
              </VisuallyHidden>
            ) : (
              <Dialog_.Title
                className={twMerge(
                  'tracking-wide text-lg font-bold font-heading text-black',
                  styleOverrides?.title
                )}
              >
                {title}
              </Dialog_.Title>
            )}

            {hideDesc || desc === '' || desc == null ? (
              <VisuallyHidden>
                <Dialog_.DialogDescription></Dialog_.DialogDescription>
              </VisuallyHidden>
            ) : (
              <Dialog_.Description className={twMerge(styleOverrides?.desc)}>
                {desc}
              </Dialog_.Description>
            )}

            <div
              className={twMerge(className, styleOverrides?.content)}
              {...rest}
            >
              {children}
            </div>
            <Dialog_.Close
              className="w-6 h-6 rounded-full hover:bg-red-200 hover:text-red-600 absolute top-4 right-4 z-1 text-black flex items-center justify-center"
              aria-label="Close"
            >
              <span className="material-icons-outlined">close</span>
            </Dialog_.Close>
          </div>
        </Dialog_.Content>
      </Dialog_.Portal>
    </Dialog_.Root>
  )
}
