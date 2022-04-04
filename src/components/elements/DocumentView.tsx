import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'
import Navigation from './DocumentView/Navigation'
import AltNavigation from './DocumentView/AltNavigation'
import Section from '@Blocks/Section'

type Props = HTMLAttr<'div'> & {
  title?: string
  styleOverrides?: {
    container?: string
    content?: string
    title?: string
  }
}
export default function DocumentView(props: Props) {
  const { children, className, title, styleOverrides, ...rest } = props
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
              if (neo.size === 1) {
                const exist = Array.from(neo)[0]
                if (exist.dataset.lastVisible != null) {
                  delete exist.dataset.lastVisible
                  if (exist !== target) {
                    neo.delete(exist)
                  }
                }
              }
              if (neo.has(target)) continue
              neo.add(target)
              continue
            }

            if (neo.has(target)) {
              if (neo.size === 1) {
                target.dataset.lastVisible = ''
                continue
              }
              neo.delete(target)
              continue
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
    <Section.Container className={twMerge(styleOverrides?.container)}>
      <Section.Title className={twMerge(styleOverrides?.title)}>
        {title}
      </Section.Title>
      <Section.Content className={twMerge(styleOverrides?.content)}>
        <main className="flex flex-col md:flex-row md:gap-16 lg:gap-20">
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
      </Section.Content>
    </Section.Container>
  )
}
