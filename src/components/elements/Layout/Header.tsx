import Navigation from './Header/Navigation'
import Search from './Header/Search'
import cntl from 'cntl'
import { useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash-es'
import { twMerge } from 'tailwind-merge'

export default function Header() {
  const [compact, setCompact] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = ref.current
    if (target == null) return

    function compactHeader() {
      setCompact(window.scrollY >= 100)
    }
    compactHeader()

    const throttled = throttle(compactHeader, 500)
    document.addEventListener('scroll', throttled)
  }, [ref])

  return (
    <header
      className={twMerge(
        `
        px-5 lg:px-16 
        py-3 lg:py-5
        grid 
        grid-cols-2 lg:grid-cols-3 
        fixed top-0 bg-black z-30 w-full
        text-white
        items-center transition-all shadow-md`,
        compact ? 'py-2 lg:py-3' : ''
      )}
      id="header"
      ref={ref}
    >
      <a href="/">
        <img
          id="logo"
          src="/media/logo-trimmed.png"
          alt="logo"
          className={twMerge(
            `h-7 lg:h-11 transition-all  pointer-events-none`,
            compact ? 'lg:h-10' : ''
          )}
        />
      </a>
      <Search />
      <Navigation />
    </header>
  )
}
