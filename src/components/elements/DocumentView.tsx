import Ads from '@Blocks/Ads'
import { ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'
import Navigation from './DocumentView/Navigation'
import AltNavigation from './DocumentView/AltNavigation'
import Section from '@Blocks/Section'
import useTrackElements from '@Functions/useTrackElements'

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
  const activeHeadings = useTrackElements(headings, {
    margin: () => {
      const marginTop = getComputedStyle(
        document.documentElement
      ).scrollPaddingTop

      return `-${marginTop ?? '0px'} 0px 0px 0px`
    },
    threshold: [0, 0.5],
    deps: [headings],
  }) as HTMLHeadingElement[]

  useEffect(() => {
    const trackedHeadings = document.querySelectorAll(
      '#main-article h1:not(.untracked), #main-article h2:not(.untracked), #main-article h3:not(.untracked)'
    )
    setHeadings(Array.from(trackedHeadings) as HTMLHeadingElement[])
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
            activeHeadings={activeHeadings}
          />
          <AltNavigation headings={headings} activeHeadings={activeHeadings} />
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
