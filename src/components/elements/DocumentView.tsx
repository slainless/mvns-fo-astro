import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'
import Navigation from './DocumentView/Navigation'
import AltNavigation from './DocumentView/AltNavigation'

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
      <main className="flex flex-col md:flex-row px-5 xs:px-7 sm:px-16 md:gap-16 lg:gap-20">
        <Navigation
          className="md:w-48 lg:w-64 pr-8 md:h-[calc(100vh-theme(spacing.header)-theme(spacing.20))]"
          headings={headings}
          activeHeadings={activeHeading}
        />
        <AltNavigation headings={headings} activeHeadings={activeHeading} />
        <article
          id="main-article"
          className={twMerge(
            'flex-grow max-w-4xl prose prose-invert',
            'prose-h2:before:w-14 prose-h2:before:bg-red-600 prose-h2:before:h-2 first:prose-h2:mt-0',
            'prose-h2:relative prose-h2:before:absolute prose-h2:before:-top-3',
            className
          )}
        >
          {children}
        </article>
      </main>
    </section>
  )
}
