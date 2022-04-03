import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Icon } from '@Bits/Button'

type Props = Omit<HTMLAttr<'div'>, 'children'> & {
  headings: HTMLHeadingElement[]
  activeHeadings: HTMLHeadingElement[]
}
export default function AltNavigation(props: Props) {
  const { className, headings, activeHeadings, ...rest } = props
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={true}>
        <a
          href="javascript:void(0);"
          className={twMerge(
            'flex md:hidden sticky top-[calc(theme(spacing.header-sm)+theme(spacing.3))] -mr-2 xs:-mr-4 sm:-mr-12',
            ' bg-zinc-700 rounded-full shadow-lg shadow-white/10 self-end items-center justify-center',
            'h-header-sm w-header-sm text-2xl z-40'
          )}
        >
          <span className="material-icons-outlined">article</span>
        </a>
      </Dialog.Trigger>
      <Dialog.Portal className="relative md:hidden">
        <Dialog.Overlay className="fixed md:hidden w-full h-full bg-black/80 z-40" />
        <Dialog.Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="fixed md:hidden right-0 w-2/3 max-w-[20rem] h-full bg-black z-40 grid grid-rows-[auto_auto]"
        >
          <VisuallyHidden>
            <Dialog.Title>Navigation Sidebar</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Close asChild={true}>
            <Icon
              icon="close"
              className={twMerge(
                'w-header-sm h-header-sm md:w-header md:h-header items-center justify-center',
                'md:text-3xl'
              )}
            ></Icon>
          </Dialog.Close>
          <aside
            id="mobile-navigation-sidebar"
            className="overflow-auto h-full px-5 py-5"
          >
            <ul
              className={twMerge(
                'flex flex-col gap-3 pr-5',
                'uppercase tracking-widest overflow-auto h-full text-xs lg:text-sm'
              )}
            >
              {headings.map((heading, i) => (
                <li
                  key={heading.id}
                  className={twMerge(
                    'relative transition-all after:transition-all',
                    'after:w-0 after:h-full after:bg-red-600 after:absolute after:-left-3 after:top-0',
                    activeHeadings[0]?.id === heading.id ? 'text-red-600' : ''
                  )}
                >
                  <a href={'#' + heading.id}>{heading.textContent}</a>
                </li>
              ))}
            </ul>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
