import { useMemo, useEffect, useState } from 'react'
import isBrowser from '@Functions/isBrowser'
import { getUser, Role, User } from '@Api/user'
import Popover from './Popover'

const Container = ({ children }: any) => (
  <nav className="flex items-center justify-end gap-6" id="navigation">
    <div className="hidden lg:contents">{children}</div>
    <button className="flex lg:hidden">
      <span className="material-icons-outlined">menu</span>
    </button>
  </nav>
)

export default function Navigation() {
  const defaultNav = (
    <>
      <a>Become Instructor</a>
      {/* <a>For Business</a> */}
      <a>Log In</a>
      <a>Register</a>
    </>
  )

  if (!isBrowser) return <Container>{defaultNav}</Container>
  const user: User | null = useMemo(getUser, [])

  return (
    <Container>
      {user == null || user.role.is(0) ? (
        defaultNav
      ) : user.role.or(Role.STUDENT | Role.INSTRUCTOR) ? (
        <>
          <a>
            <span className="text-2xl relative inline-flex items-center">
              <span className="material-icons-outlined h-full">
                shopping_cart
              </span>
              <span className="badge bg-red-500 py-0.5 px-1.5 text-xs rounded-full absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/2 scale-90">
                9
              </span>
            </span>
          </a>
          <div
            className="bg-white rounded-full py-0.5 pl-3 pr-1 flex gap-2 text-gray-500 justify-center items-center relative"
            id="menu-dock"
          >
            <Popover user={user} />
            <a className="inline-flex text-3xl leading-none">
              <span className="material-icons">account_circle</span>
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}
