import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import './DocumentView.styl'

type Props = HTMLAttr<'div'> & {
  hideAds?: boolean
}
export default function DocumentView(props: Props) {
  const { children, className, hideAds, ...rest } = props
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
    <section id="document" className={'flex'}>
      <main className="contents">
        <div
          id="navigation-sidebar"
          className="h-max items-start top-[calc(theme(spacing.header)_+_theme(spacing.10))] sticky"
        >
          <ul className="flex flex-col gap-3 w-80 pl-16 pr-8 uppercase tracking-widest overflow-auto text-sm h-[calc(calc(100vh_-_theme(spacing.header))_-_theme(spacing.20))]">
            {headings.map((heading, i) => (
              <li
                key={heading.id}
                className={twMerge(
                  'relative transition-all after:transition-all after:w-0 after:h-full after:bg-red-600 after:absolute after:-left-3 after:top-0',
                  activeHeading.includes(heading.id) ? 'text-red-600' : ''
                )}
              >
                <a href={'#' + heading.id}>{heading.textContent}</a>
              </li>
            ))}
          </ul>
        </div>
        <article
          id="main-article"
          className={twMerge('flex-grow max-w-4xl px-20', className)}
        >
          {children}
        </article>
      </main>
      {/* {hideAds ? null : (
        <Ads
          width={300}
          height={600}
          src="/media/sidebar-ad-placeholder.png"
          id="sidebar-ads"
          className="sticky top-12 items-start h-max w-max pr-10 flex-shrink-0"
        />
      )} */}
    </section>
  )
}
