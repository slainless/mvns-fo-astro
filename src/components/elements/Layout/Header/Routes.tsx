import { useAuthUserStore } from '@Api/user'
import { Link } from '@Bits/Button'
import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import Login from '@Elements/Login'
import Register from '@Elements/Register'
import toast from 'react-hot-toast'
import shallow from 'zustand/shallow'

export type Route = {
  display: string
  href: string
  onClick?: HTMLAttr<'a'>['onClick']
  render?: (el: ReactElement, key: string | number) => ReactElement
  navigationOverride?: Parameters<typeof Link>[0]
}
export default function getRoutes(): Route[] {
  const [user, removeUser] = useAuthUserStore(
    (state) => [state.user, state.removeUser] as const,
    shallow
  )

  if (user != null)
    return [
      { display: 'Dashboard', href: '/portal' },
      {
        display: 'Log Out',
        href: 'javascript:void(0)',
        onClick: () => {
          toast.success('Logged out.')
          removeUser()
        },
      },
    ]

  return [
    { display: 'Become Instructor', href: '/instructor' },
    {
      display: 'Log In',
      href: 'javascript:void(0)',
      render: (el: ReactElement, key) => (
        <Login title="Login" children={el} key={key} />
      ),
    },
    {
      display: 'Register',
      href: 'javascript:void(0)',
      render: (el: ReactElement, key) => (
        <Register title="Register" children={el} key={key} />
      ),
    },
  ]
}
