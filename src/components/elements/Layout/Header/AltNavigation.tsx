import { Icon } from '@Bits/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { Root as Toggle } from '@radix-ui/react-toggle'
import cntl from 'cntl'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input } from '@Blocks/Form'

type Props = Omit<HTMLAttr<'div'>, 'children'>
export default function AltNavigation(props: Props) {
  const { className, ...rest } = props
  const [active, setActive] = useState(false)
  return (
    // <div id="mobile-nav" className={twMerge('justify-self-end ', className)}>
    //   <Toggle asChild={true} pressed={active} onPressedChange={setActive}>
    //     <Icon
    //       icon="menu"
    //       className={twMerge(
    //         'w-header-sm h-header-sm md:w-header md:h-header items-center justify-center md:text-3xl z-[2]',
    //         active ? 'absolute top-0 right-0' : ''
    //       )}
    //     ></Icon>
    //   </Toggle>
    //   <div
    //     id="mobile-nav-view"
    //     className={twMerge(
    //       'fixed top-0 left-0 w-full h-full z-[1] bg-zinc-900',
    //       active ? 'fixed' : 'hidden'
    //     )}
    //   ></div>
    // </div>
    <div id="mobile-nav" className={twMerge('justify-self-end ', className)}>
      <Dialog.Root open={active} onOpenChange={setActive}>
        <Dialog.Trigger asChild={true}>
          <Icon
            icon="menu"
            className={twMerge(
              'w-header-sm h-header-sm md:w-header md:h-header items-center justify-center md:text-3xl z-[2]'
            )}
          ></Icon>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-full h-full bg-black/50 z-40 fixed" />
          <Dialog.Content className="w-full h-full bg-zinc-900 flex flex-col z-50 fixed">
            <div className="h-header-sm md:h-header border-b-[1px] border-white/10 w-full sm:px-16 flex flex-row-reverse">
              <Dialog.Close asChild={true}>
                <Icon
                  icon="close"
                  className={twMerge(
                    'w-header-sm h-header-sm md:w-header md:h-header items-center justify-center',
                    'md:text-3xl'
                  )}
                ></Icon>
              </Dialog.Close>
            </div>
            <div className="overflow-y-auto flex flex-col">
              <Input
                leadingIcon="search"
                className={twMerge(
                  'rounded-none bg-transparent py-5 border-b-[1px] border-white/10 focus:bg-white/10 focus:border-transparent',
                  'pl-16 text-base'
                )}
                styleOverrides={{
                  icon: { leading: cntl`left-5` },
                }}
              ></Input>
              <div id="mobile-nav-list" className="flex flex-col">
                {[
                  ['Become an Instructor', '/instructor'],
                  ['Log In', 'javascript:void(0);'],
                  ['Register', 'javascript:void(0);'],
                ].map((v) => (
                  <a href={v[1]} className={twMerge('px-5 py-4 w-full')}>
                    {v[0]}
                  </a>
                ))}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}