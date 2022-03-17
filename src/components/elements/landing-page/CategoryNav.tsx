import { getUser, Role } from '@Api/user'
import isBrowser from '@Functions/isBrowser'
import { useEffect, useMemo } from 'react'

const CATEGORIES: [display: string, href?: string][] = [
  ['Food'],
  ['Design & Style'],
  ['Arts & Entertainment'],
  ['Music'],
  ['Business'],
  ['Sports & Gaming'],
  ['Writing'],
  ['Science & Tech'],
  ['Home & Lifestyle'],
  ['Community & Government'],
  ['Wellness'],
]

function Navigation({ hidden = false }) {
  return (
    <section
      id="all-categories"
      className={`relative group ${hidden ? 'hidden' : ''}`}
      hidden={hidden}
    >
      <div className="overflow-hidden w-full h-[1080px] bg-[url('/media/neonbrand-1-aA2Fadydc-unsplash.jpg')] bg-cover group-hover:opacity-50 opacity-30 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="sticky top-0 pt-28 pb-16 container px-12 grid grid-cols-2 gap-10">
          <h2 className="font-heading text-5xl font-bold drop-shadow-md">
            Choose a category to watch a class highlight.
          </h2>
          <nav className="flex flex-col text-3xl font-heading gap-2 pl-10 font-bold">
            {CATEGORIES.map((cat, key) => (
              <a
                key={key}
                className="hover:before:content-['\__'] hover:before:text-red-500 drop-shadow-md"
                children={cat[0]}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default function CategoryNav() {
  if (!isBrowser) return <Navigation />

  const user = useMemo(() => getUser(), [])
  console.log('cat nav user', user)
  if (user == null || user.role.is(Role.NONE)) return <Navigation />
  else return <Navigation hidden />
}
