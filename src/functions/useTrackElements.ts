import { DependencyList, useEffect, useState } from 'react'
import { isString } from 'lodash-es'

type Options = {
  margin?: () => string | string
  lastAlwaysActive?: boolean
  deps?: DependencyList
} & IntersectionObserverInit
export default function useTrackElements(
  queryOrEls: string | HTMLElement[],
  options: Options
) {
  const { margin, deps, lastAlwaysActive, ...rest } = Object.assign<
    Options,
    Options
  >(
    {
      lastAlwaysActive: true,
    },
    options
  )

  const [actives, setActives] = useState<HTMLElement[]>([])
  useEffect(() => {
    const theMargin = isString(margin) ? margin : margin?.()
    const els = isString(queryOrEls)
      ? (document.querySelectorAll(queryOrEls) as NodeListOf<HTMLElement>)
      : queryOrEls

    const observer = new IntersectionObserver(
      (entries) => {
        setActives((old) => {
          const neo = new Set(old)
          for (const entry of entries) {
            const target = entry.target as HTMLElement

            const isVisible = entry.intersectionRatio > 0

            if (isVisible) {
              if (lastAlwaysActive)
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
              if (lastAlwaysActive)
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
        rootMargin: theMargin,
        root: null,
        threshold: 0,
        ...rest,
      }
    )

    for (const [index, el] of Object.entries(els)) {
      el.dataset.index = index

      if (index === '0') setActives([el])
      observer.observe(el)
    }
  }, deps)

  return actives
}
