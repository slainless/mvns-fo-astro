import cntl from 'cntl'
import { createSingleton } from 'src/functions/jsx-factory'
import { findChildren, mergeClass } from 'src/functions/jsx-helper'
import { isArray } from 'lodash-es'

type DivAttr = HTMLAttributes<HTMLDivElement>
export module Card {
  namespace Style {
    export const Container = cntl`
      flex
      flex-col
      rounded-md
      overflow-hidden
      justify-between
      bg-cover
    `

    export const Content = cntl`
    `

    export const Header = cntl`
    `
  }

  export const Container: FunctionComponent<DivAttr & { bgImg?: string }> = (
    props
  ) => {
    const { class: cls, children, bgImg, ...rest } = props
    const { content, header } = findChildren(children, {
      content: (child) => child.type === Content,
      // image: (child) => child.type === Image,
      header: (child) => child.type === Header,
    })

    return (
      <div
        style={bgImg ? `background-image: url('${bgImg}')` : ''}
        class={mergeClass(cls, Style.Container)}
        {...rest}
      >
        {header}
        {content}
        {/* {image} */}
      </div>
    )
  }

  export const Header = createSingleton('div', {
    class: mergeClass('card-header', Style.Header),
  })

  export const Content = createSingleton('div', {
    class: mergeClass('card-content', Style.Content),
  })

  // type ImgAttr = HTMLAttributes<HTMLDivElement> & { src: string }
  // export const Image: FunctionComponent<ImgAttr> = (props) => {
  //   const { class: cls, src, ...rest } = props
  //   return (
  //     <div
  //       {...rest}
  //       style="background-image: url(`${}`)"
  //       class={mergeClass('card-image', Style.Image)}
  //     ></div>
  //   )
  // }
}
