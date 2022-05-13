import { Popover, Transition } from '@headlessui/react'
// import { Fragment, JSX } from 'react'
import { useEffect, useMemo } from 'react'
import { mergeClass } from '@Functions/jsx-helper'
// import { createPopper } from '@popperjs/core'
import cntl from 'cntl'
// import { Role, User } from '@Api/user'
import { AuthUser } from '@Class/user'
import { createSingleton } from '@Functions/jsx-factory'
import { Route } from './Routes'
import { twMerge } from 'tailwind-merge'

type Props = { user: AuthUser; routes: Route[] }
export default function MenuPopover(props: Props) {
  const { user, routes } = props

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

  // console.log(user.role.or(Role.INSTRUCTOR), user.role)

  return (
    <Popover className="contents">
      {({ open }: { open: boolean }) => (
        <>
          <Popover.Button as="div" className="contents">
            <button
              className={cntl`
              inline-flex
              text-xl
              transition-transform
              duration-500
              ${open ? 'rotate-180 text-red-500' : 'text-gray-500'}
            `}
              id="menu-toggle-button"
              aria-label="Menu Popup"
            >
              <span className="material-icons-outlined">
                {open ? 'close' : 'menu'}
              </span>
            </button>
          </Popover.Button>
          <Popover.Panel
            // unmount={false}
            static={true}
            className="contents"
          >
            <div
              id="menu-panel"
              className={cntl`
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
              {routes.map((route, i) => {
                const { display, href, onClick, render } = route
                const key = display + i
                const el = (
                  <a
                    key={key}
                    href={href}
                    onClick={(e) => onClick?.(e)}
                    className={twMerge(
                      'py-1 px-4 hover:bg-gray-100 transition-colors rounded-lg'
                    )}
                  >
                    {display}
                  </a>
                )

                if (render != null) return render(el, key)
                return el
              })}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
