import { createSingleton } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { findChildren, mergeClass } from '@Functions/jsx-helper'
import { Arrow } from '@Bits/Button'
import { useRef } from 'preact/hooks'
import {
  fastChildrenCheck,
  getScrollVisibilityState,
} from '@Functions/dom-helper'

type DivAttr = HTMLAttributes<HTMLDivElement>
type ArrowButtonProps = Parameters<typeof Arrow>[0]
module Carousel {
  /**
   * Initial style for Carousel
   */
  export namespace Style {
    export const Container = cntl`relative px-5`
    export const Content = cntl`
      overflow-x-scroll
      flex
      flex-row
      snap-x
      snap-proximity
      scroll-smooth
    `
    export const NextButton = cntl`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12`
    export const PrevButton = cntl`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12`
  }

  type ContainerProps = FunctionComponent<
    DivAttr & {
      /** Useful if children's width is not symmetrically divided.  */
      detectPartial?: boolean
    }
  >
  /**
   * Container components for the carousel. Need other counterparts
   * to function correctly.
   *
   * For example, carousel structure:
   * ```tsx
   *  <Carousel.Container>
   *    <Carousel.Content>
   *      <!-- Put your cards/content here -->
   *    </Carousel.Content>
   *    <Carousel.NextButton/>
   *    <Carousel.PrevButton/>
   *  </Carousel.Container>
   * ```
   */
  export const Container: ContainerProps = (props) => {
    const { class: cls, children, detectPartial, ...rest } = props
    const contentRef = useRef<HTMLDivElement>(null)
    const { nextArrow, prevArrow, content } = findChildren(children, {
      nextArrow: (child) => child.type === NextButton,
      prevArrow: (child) => child.type === PrevButton,
      content: (child) => child.type === Content,
    })

    // injecting ref to content, for easier dom control/access
    // only injected if content exist
    if (content) {
      ;(content.props as DivAttr).ref = contentRef
    }

    // injecting scroll to next element functionality to next arrow
    // on click
    if (nextArrow) {
      ;(nextArrow.props as ArrowButtonProps).onClick = (e) => {
        if (contentRef.current == null) return
        const parent = contentRef.current
        if (parent.scrollLeft === parent.scrollWidth) parent.scrollTo(0, 0)

        // get element which is hidden but previous element
        // is partial-right or visible
        fastChildrenCheck(parent, (el) => {
          const prevSibling = el.previousElementSibling
          if (prevSibling == null || !(prevSibling instanceof HTMLElement))
            return false

          const prevPos = getScrollVisibilityState(prevSibling)!
          const currentPos = getScrollVisibilityState(el, true)!

          return (
            (currentPos.x == 'partial-right' && currentPos.percentage.x < 90) ||
            (currentPos.x == 'hidden' &&
              (prevPos.x == 'visible' ||
                prevPos.x == 'partial-right' ||
                prevPos.x == 'overflow'))
          )
          //   currentPos.x == 'partia'
          //   (currentPos.x == 'hidden' ||
          //     (detectPartial == true && currentPos.x == 'partial-right')) &&
          //   (prevPos.x == 'partial-right' || prevPos.x == 'visible')
          // )
        }).then((el) => {
          // scroll to that element
          // if (el) el.scrollIntoView({ block: 'nearest' })
          // else parent.lastElementChild?.scrollIntoView({ block: 'nearest' })
          if (el) {
            const { pos } = getScrollVisibilityState(el)!
            parent.scrollBy(pos.element.right - pos.view.right, 0)
          } else parent.scrollTo(0, 0)
        })
      }
    }

    // injecting scroll to prev element functionality to prev arrow
    // on click
    if (prevArrow) {
      ;(prevArrow.props as ArrowButtonProps).onClick = (e) => {
        if (contentRef.current == null) return
        const parent = contentRef.current
        if (parent.scrollLeft === 0) parent.scrollTo(parent.scrollWidth, 0)

        // get element which is hidden or partial-left but next element
        // is visible
        fastChildrenCheck(parent, (el) => {
          const nextSibling = el.nextElementSibling
          if (nextSibling == null || !(nextSibling instanceof HTMLElement))
            return false

          const nextPos = getScrollVisibilityState(nextSibling)!
          const currentPos = getScrollVisibilityState(el, true)!

          return (
            (currentPos.x == 'partial-left' && currentPos.percentage.x < 90) ||
            (currentPos.x == 'hidden' &&
              (nextPos.x == 'visible' || nextPos.x == 'overflow'))
            // nextPos.x == 'visible' &&
            // (currentPos.x == 'hidden' || currentPos.x == 'partial-left')
          )
        }).then((el) => {
          // scroll to that element
          // if (el) el.scrollIntoView({ block: 'nearest' })
          // else parent.lastElementChild?.scrollIntoView({ block: 'nearest' })

          if (el) {
            const { pos } = getScrollVisibilityState(el)!
            parent.scrollBy(pos.element.left - pos.view.left, 0)
          } else parent.scrollTo(parent.scrollWidth, 0)
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
        <div class="overflow-hidden rounded-lg">{content}</div>
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
      <Arrow {...rest} type="next" class={mergeClass(Style.NextButton, cls)} />
    )
  }

  export const PrevButton: FunctionComponent<Omit<ArrowButtonProps, 'type'>> = (
    props
  ) => {
    const { class: cls, children, ...rest } = props
    return (
      <Arrow {...rest} type="prev" class={mergeClass(Style.PrevButton, cls)} />
    )
  }
}

export default Carousel
