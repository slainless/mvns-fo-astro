import { Arrow, Common as Button, Icon } from '@Bits/Button'
import { getScrollVisibilityState } from '@Functions/dom-helper'
import isBrowser from '@Functions/isBrowser'
import { useCallback, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import './CategoryBar.styl'

const categories = [
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

function getHidden(el: HTMLElement, reverse = false) {
  const THRESHOLD = 85
  const STEP = 3

  const children = Array.from(el.children) as HTMLElement[]
  const length = children.length

  const getPrev = (i: number) => (reverse ? i + 1 : i - 1)
  const getStep = () => (reverse ? STEP - 1 : -(STEP - 1))
  const get = (i: number): number | null => {
    const state = getScrollVisibilityState(children[i], true)
    if (state?.x == 'visible') return getPrev(i) + getStep()
    else if (state?.x == 'partial-left' || state?.x == 'partial-right') {
      if (state.percentage.x < THRESHOLD) return i + getStep()
      return getPrev(i) + getStep()
    }
    return null
  }

  for (
    let i = reverse ? length - 1 : 0;
    reverse ? i >= 0 : i < length;
    reverse ? i-- : i++
  ) {
    const gotIndex = get(i)
    if (gotIndex == null) continue
    const normalizedIndex =
      gotIndex < 0 ? 0 : gotIndex >= length ? length - 1 : gotIndex
    const el = children[normalizedIndex]
    if (el instanceof HTMLElement)
      return [el, getScrollVisibilityState(el)!, normalizedIndex] as const
  }
  return null
}

if (isBrowser) {
  // @ts-ignore
  window['test'] = getScrollVisibilityState
}

type Props = HTMLAttr<'div'>
export default function CategoryBar(props: Props) {
  const { className, ...rest } = props
  const ref = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    const target = ref.current
    if (target == null) return
    const hiddenEl = getHidden(target, true)
    console.log(hiddenEl)
    if (hiddenEl == null) return
    const [scrollTarget, scrollState, i] = hiddenEl
    target.scrollBy({
      left: scrollState.pos.element.right - scrollState.pos.view.right + 5,
      behavior: 'smooth',
    })
  }, [ref])

  const prev = useCallback(() => {
    const target = ref.current
    if (target == null) return
    const hiddenEl = getHidden(target)
    if (hiddenEl == null) return
    const [scrollTarget, scrollState, i] = hiddenEl
    console.log(scrollTarget, scrollState)
    target.scrollBy({
      left: scrollState.pos.element.left - scrollState.pos.view.left - 5,
      behavior: 'smooth',
    })
  }, [ref])
  return (
    // hacks to make container rigid
    <div className={twMerge('grid relative', className)} {...rest}>
      <Arrow
        onClick={prev}
        arrowType="prev"
        className="absolute w-7 h-7 text-base top-1/2 hover:ring-2 focus:ring-2 ring-red-600/50 -translate-y-1/2 left-0"
      />
      <Arrow
        onClick={next}
        arrowType="next"
        className="absolute w-7 h-7 text-base top-1/2 hover:ring-2 focus:ring-2 ring-red-600/50 -translate-y-1/2 right-0"
      />
      <div
        id="category-filter"
        className="flex flex-1 gap-2 overflow-auto mx-10 relative"
        ref={ref}
      >
        {categories.map((category) => (
          <Button
            key={category[0]}
            mods={['no-translate', 'no-fill', 'to-fill-red']}
            className="shrink-0 text-white rounded-full normal-case text-sm py-1 px-4"
          >
            {category[0]}
          </Button>
        ))}
      </div>
    </div>
  )
}
