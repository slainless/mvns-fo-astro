import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import './DocumentView.styl'

type Props = HTMLAttr<'div'> & {
  hideAds?: boolean
  styleOverrides?: {
    container?: string
  }
}
export default function DocumentView(props: Props) {
  const { children, className, hideAds, styleOverrides, ...rest } = props
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])
  const [activeHeading, setActiveHeading] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const marginTop = getComputedStyle(
      document.documentElement
    ).scrollPaddingTop

    const trackedHeadings = document.querySelectorAll(
      '#main-article h1:not(.untracked), #main-article h2:not(.untracked), #main-article h3:not(.untracked)'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveHeading((old) => {
          const neo = new Set(old)
          for (const entry of entries) {
            const target = entry.target as HTMLHeadingElement

            const isVisible = entry.intersectionRatio > 0

            if (isVisible) {
              if (neo.has(target)) {
              } else neo.add(target)
            } else {
              if (neo.has(target)) neo.delete(target)
              else {
              }
            }
          }
          return Array.from(neo).sort((a, b) => {
            return +(a.dataset['index'] ?? 0) - +(b.dataset['index'] ?? 0)
          })
        })
      },
      {
        rootMargin: `-${marginTop ?? '0px'} 0px 0px 0px`,
        root: null,
        threshold: [0, 0.5],
      }
    )

    const els: HTMLHeadingElement[] = []
    type Entry = [string, HTMLHeadingElement][]

    for (const [index, heading] of Object.entries(trackedHeadings) as Entry) {
      els.push(heading)
      heading.dataset.index = index

      if (index === '0') setActiveHeading([heading])
      observer.observe(heading)
    }

    setHeadings(els)
  }, [])

  return (
    <section
      id="document"
      className={twMerge('flex', styleOverrides?.container)}
    >
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
                  activeHeading[0]?.id === heading.id ? 'text-red-600' : ''
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
