import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import './DocumentView.styl'

export default function DocumentView(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])
  const [activeHeading, setActiveHeading] = useState<string[]>([])

  useEffect(() => {
    const trackedHeadings = document.querySelectorAll(
      '#main-article h1, #main-article h2, #main-article h3'
    )

    const options: IntersectionObserverInit = {
      root: document,
      rootMargin: '0px',
      threshold: [0, 1],
    }

    const observer = new IntersectionObserver((entries) => {
      setActiveHeading((old) => {
        const neo = new Set(old)
        for (const entry of entries) {
          const target = entry.target
          const id = target.id

          const isVisible = entry.intersectionRatio > 0

          if (isVisible) {
            if (neo.has(id)) {
            } else neo.add(id)
          } else {
            if (neo.has(id)) neo.delete(id)
            else {
            }
          }
        }
        return Array.from(neo)
      })
    })

    const els: HTMLHeadingElement[] = []
    type Entry = [string, HTMLHeadingElement][]

    for (const [index, heading] of Object.entries(trackedHeadings) as Entry) {
      els.push(heading)
      heading.dataset.index = index

      if (index === '0') setActiveHeading([heading.id])
      observer.observe(heading)
    }

    setHeadings(els)
  }, [])

  return (
    <section id="document" className="flex gap-10">
      <main className="contents">
        <div
          id="navigation-sidebar"
          className="h-max items-start top-20 sticky pl-10"
        >
          <ul className="flex flex-col gap-3 w-56 uppercase tracking-widest text-xs">
            {headings.map((heading, i) => (
              <li
                key={heading.id}
                className={
                  activeHeading.includes(heading.id) ? 'text-red-500' : ''
                }
              >
                <a href={'#' + heading.id}>{heading.textContent}</a>
              </li>
            ))}
          </ul>
        </div>
        <article id="main-article" className="flex-grow">
          {children}
        </article>
      </main>
      <Ads
        width={300}
        height={600}
        src="/media/sidebar-ad-placeholder.png"
        id="sidebar-ads"
        className="sticky top-12 items-start h-max w-max pr-10 flex-shrink-0"
      />
    </section>
  )
}
