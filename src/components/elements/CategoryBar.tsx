import { Arrow, Common as Button, Icon } from '@Bits/Button'
import { getScrollVisibilityState } from '@Functions/dom-helper'
import isBrowser from '@Functions/isBrowser'
import cntl from 'cntl'
import { useCallback, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import './CategoryBar.styl'
import { useEffect } from 'react'

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

type NavButtonProps = Parameters<typeof Arrow>[0] & {
  containerClass?: string
}
function NavButton(props: NavButtonProps) {
  const { className, containerClass, arrowType, ...rest } = props
  return (
    <div
      className={twMerge(
        arrowType == 'prev'
          ? 'pr-3 left-0 after:bg-gradient-to-r'
          : 'pl-3 right-0 after:bg-gradient-to-l after:order-first',
        'flex flex-row absolute h-full',
        'after:w-5 after:from-black after:to-transparent after:h-full',
        containerClass
      )}
    >
      <div
        className={twMerge(
          arrowType == 'prev' ? 'pr-3' : 'pl-3',
          'hidden lg:flex place-items-center bg-black h-full'
        )}
      >
        <Arrow
          arrowType={arrowType}
          className={twMerge(
            'w-7 h-7 focus:ring-2 ring-offset-2 ring-offset-black text-base',
            className
          )}
          {...rest}
        ></Arrow>
      </div>
    </div>
  )
}

type Props = HTMLAttr<'div'>
export default function CategoryBar(props: Props) {
  const { className, ...rest } = props
  const ref = useRef<HTMLDivElement>(null)
  const [[leftEdgeVisible, rightEdgeVisible], setEdgeVisibility] = useState<
    [boolean, boolean]
  >([false, false])

  useEffect(() => {
    const container = ref.current
    if (container == null) return

    const children = Array.from(container.children)
    if (children.length === 0) return
    const leftEdge = children.shift()
    const rightEdge = children.pop()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { target } = entry
          console.log(entries)
          if (target === leftEdge)
            setEdgeVisibility((old) => [entry.intersectionRatio > 0.9, old[1]])
          if (target === rightEdge)
            setEdgeVisibility((old) => [old[0], entry.intersectionRatio > 0.9])
        }
      },
      {
        root: ref.current,
        threshold: 0.9,
      }
    )

    if (leftEdge) observer.observe(leftEdge)
    if (rightEdge) observer.observe(rightEdge)
  }, [ref])

  const scrollFn = useCallback(
    (direction: Parameters<typeof Arrow>[0]['arrowType']) => () => {
      const bar = ref.current
      if (bar == null) return
      const scrollValue = bar.getClientRects()[0].width / 2
      bar.scrollBy({
        left: direction == 'prev' ? -scrollValue : scrollValue,
        // behavior: 'smooth',
      })
    },
    [ref]
  )

  return (
    // hacks to make container rigid
    <div className={twMerge('grid relative', className)} {...rest}>
      <div
        id="category-filter"
        className="flex flex-1 gap-2 overflow-auto relative scroll-smooth snap-x snap-proximity"
        ref={ref}
      >
        {categories.map((category) => (
          <Button
            key={category[0]}
            mods={['no-translate', 'no-fill', 'to-fill-red']}
            className="shrink-0 text-white rounded-full normal-case text-sm py-1 px-4 snap-start"
          >
            {category[0]}
          </Button>
        ))}
      </div>
      <NavButton
        containerClass={leftEdgeVisible ? 'hidden' : ''}
        arrowType="prev"
        onClick={scrollFn('prev')}
      />
      <NavButton
        containerClass={rightEdgeVisible ? 'hidden' : ''}
        arrowType="next"
        onClick={scrollFn('next')}
      />
    </div>
  )
}
