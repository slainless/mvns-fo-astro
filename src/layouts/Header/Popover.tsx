import { Popover, Transition } from '@headlessui/react'
import { Fragment, JSX } from 'preact'
import { useEffect, useMemo } from 'preact/hooks'
import { mergeClass } from '@Functions/jsx-helper'
// import { createPopper } from '@popperjs/core'
import cntl from 'cntl'
import { Role, User } from '@Api/user'
import { createSingleton } from '@Functions/jsx-factory'

const MenuItem = createSingleton('a', {
  class: cntl`py-1 px-4 hover:bg-gray-100 transition-colors rounded-lg`,
})

export default function MenuPopover(props: { user: User }) {
  const { user } = props

  useEffect(() => {
    const menuDock = document.querySelector('#menu-dock')!
    const menuPanel = document.querySelector('#menu-panel')

    if (
      menuDock != null &&
      menuPanel != null &&
      menuPanel instanceof HTMLElement
    ) {
      // const instance = createPopper(menuDock, menuPanel, {
      //   placement: 'bottom-end',
      // })
      menuPanel.style.transform = `translateY(${menuDock.clientHeight}px)`
    }
  }, [])

  console.log(user.role.or(Role.INSTRUCTOR), user.role)

  return (
    <Popover class="contents">
      {({ open }: { open: boolean }) => (
        <>
          <Popover.Button as="div" class="contents">
            <button
              class={cntl`
              inline-flex
              text-xl
              transition-transform
              duration-500
              ${open ? 'rotate-180 text-red-500' : 'text-gray-500'}
            `}
              id="menu-toggle-button"
              aria-label="Menu Popup"
            >
              <span class="material-icons-outlined">
                {open ? 'close' : 'menu'}
              </span>
            </button>
          </Popover.Button>
          <Popover.Panel
            // unmount={false}
            static={true}
            class="contents"
          >
            <div
              id="menu-panel"
              class={cntl`
                absolute bg-white rounded-md p-3
                top-0 right-0 mt-5
                ${open ? '' : 'hidden'}
                flex flex-col
                gap-1 whitespace-nowrap
                w-48 shadow-md drop-shadow-sm 
                border-slate-900 border-[1px]
                text-black
              `}
            >
              {user.role.or(Role.INSTRUCTOR) ? (
                <MenuItem>Instructor Page</MenuItem>
              ) : null}
              <MenuItem>My Learning</MenuItem>
              <MenuItem>Wishlist</MenuItem>
              <MenuItem>Log out</MenuItem>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
