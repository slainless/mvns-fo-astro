import { Common as Button } from '@Bits/Button'
import { throttle } from 'lodash-es'
import { useEffect, useRef, useState } from 'react'

export default function RegisterPlugin() {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const target = ref.current
    if (target == null) return

    function hider() {
      const scrollY = window.scrollY

      const hide =
        scrollY <= 0 ||
        scrollY <= 580 ||
        // scroll position + screen height > total document height - 580
        scrollY + window.innerHeight > document.body.offsetHeight - 580

      if (!hide && target?.hidden) {
        setHidden(false)
      } else if (hide && target?.hidden == false) {
        setHidden(true)
      }
    }

    hider()
    const throttled = throttle(hider, 500)
    document.addEventListener('scroll', throttled)
  }, [ref])

  return (
    <aside
      id="register-plugin"
      className={`
        w-full flex justify-end
        bg-zinc-900/95 backdrop-blur-lg 
        px-16 gap-8 py-5 
        fixed bottom-0 z-50 
        opacity-0 
        pointer-events-none

        transition-all duration-500 
        transform translate-y-full

        ${
          hidden == false ? 'opacity-100 pointer-events-auto translate-y-0' : ''
        }
      `}
      hidden={hidden}
      ref={ref}
    >
      <span className="w-72 text-sm">
        Learn from the most inspiring artists, leaders, and icons in the world.
      </span>
      <Button
        as="a"
        className="text-white bg-red-600 border-red-600 hover:text-white hover:border-white hover:translate-y-0"
      >
        Register Now
      </Button>
    </aside>
  )
}
