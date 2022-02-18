import { createSingleton } from 'src/functions/jsx-factory'
import cntl from 'cntl'
import { findChildren, mergeClass } from 'src/functions/jsx-helper'
import { ArrowButton } from './../bits/Button'
import { useRef } from 'preact/hooks'
import {
  fastChildrenCheck,
  getScrollVisibilityState,
} from 'src/functions/dom-helper'

type DivAttr = HTMLAttributes<HTMLDivElement>
type ArrowButtonProps = Parameters<typeof ArrowButton>[0]
module Carousel {
  export namespace Style {
    export const Container = cntl`relative px-5`
    export const Content = cntl`
      overflow-x-scroll
      flex
      flex-row
      mx-2
      snap-x
      snap-proximity
      scroll-smooth
    `
    export const NextButton = cntl`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12`
    export const PrevButton = cntl`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12`
  }

  export const Container: FunctionComponent<DivAttr> = (props) => {
    const { class: cls, children, ...rest } = props
    const contentRef = useRef<HTMLDivElement>(null)
    const { nextArrow, prevArrow, content } = findChildren(children, {
      nextArrow: (child) => child.type === NextButton,
      prevArrow: (child) => child.type === PrevButton,
      content: (child) => child.type === Content,
    })

    if (content) {
      ;(content.props as DivAttr).ref = contentRef
    }

    if (nextArrow) {
      ;(nextArrow.props as ArrowButtonProps).onClick = (e) => {
        if (contentRef.current == null) return
        const parent = contentRef.current
        if (parent.scrollLeft === parent.scrollWidth) return

        // get element which is hidden but previous element
        // is partial-right or visible
        fastChildrenCheck(parent, (el) => {
          const prevSibling = el.previousElementSibling
          if (prevSibling == null || !(prevSibling instanceof HTMLElement))
            return false

          const prevPos = getScrollVisibilityState(prevSibling)!
          const currentPos = getScrollVisibilityState(el)!

          console.log([currentPos, el], [prevPos, prevSibling])

          return (
            currentPos.x == 'hidden' &&
            (prevPos.x == 'partial-right' || prevPos.x == 'visible')
          )
        }).then((el) => {
          // scroll to that element
          if (el) el.scrollIntoView()
          else parent.lastElementChild?.scrollIntoView()
        })
      }
    }

    if (prevArrow) {
      ;(prevArrow.props as ArrowButtonProps).onClick = (e) => {
        if (contentRef.current == null) return
        const parent = contentRef.current
        if (parent.scrollLeft === 0) return

        // get element which is hidden or partial-left but next element
        // is visible
        fastChildrenCheck(parent, (el) => {
          const nextSibling = el.nextElementSibling
          if (nextSibling == null || !(nextSibling instanceof HTMLElement))
            return false

          const nextPos = getScrollVisibilityState(nextSibling)!
          const currentPos = getScrollVisibilityState(el)!

          return (
            nextPos.x == 'visible' &&
            (currentPos.x == 'hidden' || currentPos.x == 'partial-left')
          )
        }).then((el) => {
          // scroll to that element
          if (el) el.scrollIntoView()
          else parent.firstElementChild?.scrollIntoView()
        })
      }
    }

    return (
      <div
        {...rest}
        class={mergeClass('carousel-container', Style.Container, cls)}
      >
        {nextArrow}
        {prevArrow}
        <div class="overflow-hidden -mx-2">{content}</div>
      </div>
    )
  }

  export const Content = createSingleton('div', {
    class: mergeClass('carousel-content', Style.Content),
  })

  export const NextButton: FunctionComponent<Omit<ArrowButtonProps, 'type'>> = (
    props
  ) => {
    const { class: cls, children, ...rest } = props
    return (
      <ArrowButton
        {...rest}
        type="next"
        class={mergeClass(Style.NextButton, cls)}
      />
    )
  }

  export const PrevButton: FunctionComponent<Omit<ArrowButtonProps, 'type'>> = (
    props
  ) => {
    const { class: cls, children, ...rest } = props
    return (
      <ArrowButton
        {...rest}
        type="prev"
        class={mergeClass(Style.PrevButton, cls)}
      />
    )
  }
}

export default Carousel
