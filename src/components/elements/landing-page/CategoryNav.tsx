// import { getUser, Role } from '@Class/role'
import isBrowser from '@Functions/isBrowser'
import { useEffect, useMemo } from 'react'

const CATEGORIES: [display: string, href?: string][] = [
  ['Design'],
  ['Personal Development'],
  ['IT & Software'],
  ['Business & Policy'],
  ['Marketing'],
  ['Photography & Video'],
  ['Teaching & Academics'],
  ['Health & Fitness'],
  ['Finance & Accounting'],
]

function Navigation({ hidden = false }) {
  return (
    <section
      id="all-categories"
      className={`relative group h-max sm:h-[1080px] py-20 ${
        hidden ? 'hidden' : ''
      }`}
      hidden={hidden}
    >
      <div className="absolute inset-0 overflow-hidden w-full h-full bg-[url('/media/neonbrand-1-aA2Fadydc-unsplash.jpg')] bg-cover group-hover:opacity-50 opacity-30 transition-opacity duration-500"></div>
      <div className="w-full h-full">
        <div className="sticky top-36 container px-12 flex flex-col sm:grid grid-cols-2 sm:justify-center gap-y-20 gap-x-5 md:gap-x-20">
          <h2 className="font-heading text-3xl xs:text-4xl md:text-5xl font-bold drop-shadow-md">
            Choose a category to watch a class highlight.
          </h2>
          <nav className="flex flex-col text-xl xs:text-2xl md:text-3xl font-heading gap-2 xs:gap-3 font-semibold">
            {CATEGORIES.map((cat, key) => (
              <a
                key={key}
                className="w-max before:w-0 hover:before:mr-2 before:h-2 before:inline-block before:transition-all before:bg-red-600 hover:before:w-4 drop-shadow-md"
                children={cat[0]}
                href="/class/all"
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default function CategoryNav() {
  // if (!isBrowser) return <Navigation />

  // const user = useMemo(() => getUser(), [])
  // console.log('cat nav user', user)
  // if (user == null || user.role.is(Role.NONE)) return <Navigation />
  // else return <Navigation hidden />
  return <Navigation />
}
