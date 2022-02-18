import { createSingleton } from 'src/functions/jsx-factory'
import cntl from 'cntl'
import { findChildren, mergeClass } from 'src/functions/jsx-helper'
import { ArrowButton } from './../bits/Button'
import { useRef } from 'preact/hooks'
import {
  fastChildrenCheck,
  getScrollPositionOf,
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
      }
    }

    if (prevArrow) {
      ;(prevArrow.props as ArrowButtonProps).onClick = (e) => {
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
