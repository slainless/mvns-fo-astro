import Navigation from './Header/Navigation'
import Search from './Header/Search'
import cntl from 'cntl'
import { useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import AltNavigation from './Header/AltNavigation'
import getRoutes from './Header/Routes'
import { useUserStore } from '@Api/user'

export default function Header() {
  const [compact, setCompact] = useState(false)
  const routes = getRoutes()
  const user = useUserStore((state) => state.user)
  const ref = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const target = ref.current
  //   if (target == null) return

  //   function compactHeader() {
  //     setCompact(window.scrollY >= 100)
  //   }
  //   compactHeader()

  //   const throttled = throttle(compactHeader, 500)
  //   document.addEventListener('scroll', throttled)
  // }, [ref])

  return (
    <header
      className={twMerge(
        `
        px-0 sm:px-16
        h-header-sm md:h-header
        grid grid-cols-2 lg:grid-cols-3 
        fixed top-0 bg-black z-30 w-full
        text-white
        items-center transition-all shadow-md`,
        compact ? 'py-2 lg:py-3' : ''
      )}
      id="header"
      ref={ref}
    >
      <a href="/" className="pl-5 xs:pl-7 sm:pl-0 w-max">
        <img
          id="logo"
          src="/media/logo-trimmed.png"
          alt="logo"
          className={twMerge(
            `h-9 md:h-11 transition-all  pointer-events-none`,
            compact ? 'lg:h-10' : ''
          )}
        />
      </a>
      <Search className="hidden lg:flex" />
      <Navigation className="hidden lg:flex" routes={routes} user={user} />
      <AltNavigation className="flex lg:hidden" routes={routes} user={user} />
    </header>
  )
}
