import { Arrow, Common as Button, Icon } from '@Bits/Button'
import cntl from 'cntl'
import { useCallback, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import './CarouselBar.css'
import { useEffect } from 'react'

type NavButtonProps = Parameters<typeof Arrow>[0] & {
  containerClass?: string
  disableNav?: boolean
}
function NavButton(props: NavButtonProps) {
  const { className, containerClass, arrowType, disableNav, ...rest } = props
  return (
    <div
      className={twMerge(
        arrowType == 'prev'
          ? 'pr-3 left-0 after:bg-gradient-to-r'
          : 'pl-3 right-0 after:bg-gradient-to-l after:order-first',
        'flex flex-row absolute h-full pointer-events-none',
        'after:w-5 after:from-black after:to-transparent after:h-full',
        containerClass
      )}
    >
      {disableNav ? (
        <></>
      ) : (
        <div
          className={twMerge(
            arrowType == 'prev' ? 'pr-3' : 'pl-3',
            'hidden lg:flex place-items-center bg-black h-full pointer-events-none'
          )}
        >
          <Arrow
            arrowType={arrowType}
            className={twMerge(
              'w-7 h-7 focus:ring-2 ring-offset-2 ring-offset-black text-base pointer-events-auto',
              className
            )}
            {...rest}
          ></Arrow>
        </div>
      )}
    </div>
  )
}

type Props = HTMLAttr<'div'> & {
  disableNav?: boolean
  defaultVisible?: boolean
  styleOverrides?: {
    container?: string
    bar?: string
  }
}
export default function CarouselBar(props: Props) {
  const {
    className,
    children,
    styleOverrides,
    disableNav,
    defaultVisible,
    ...rest
  } = props
  const ref = useRef<HTMLDivElement>(null)
  const [[leftEdgeVisible, rightEdgeVisible], setEdgeVisibility] = useState<
    [boolean, boolean]
  >(defaultVisible ? [true, true] : [true, false])

  useEffect(() => {
    const THRESHOLD = 0.99
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
          if (target === leftEdge)
            setEdgeVisibility((old) => [
              entry.intersectionRatio > THRESHOLD,
              old[1],
            ])
          if (target === rightEdge)
            setEdgeVisibility((old) => [
              old[0],
              entry.intersectionRatio > THRESHOLD,
            ])
        }
      },
      {
        root: ref.current,
        threshold: THRESHOLD,
      }
    )

    if (leftEdge) observer.observe(leftEdge)
    if (rightEdge) observer.observe(rightEdge)
  }, [ref])

  const scrollFn = useCallback(
    disableNav
      ? () => () => {}
      : (direction: Parameters<typeof Arrow>[0]['arrowType']) => () => {
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
    <div
      className={twMerge('grid relative', className, styleOverrides?.container)}
      {...rest}
    >
      <div
        className={twMerge(
          'carousel-bar',
          'flex flex-1 gap-2 overflow-auto scroll-smooth',
          styleOverrides?.bar
        )}
        ref={ref}
      >
        {children}
      </div>
      <NavButton
        disableNav={disableNav}
        containerClass={leftEdgeVisible ? 'hidden' : ''}
        arrowType="prev"
        onClick={scrollFn('prev')}
      />
      <NavButton
        disableNav={disableNav}
        containerClass={rightEdgeVisible ? 'hidden' : ''}
        arrowType="next"
        onClick={scrollFn('next')}
      />
    </div>
  )
}
