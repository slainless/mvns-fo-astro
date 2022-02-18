import cntl from 'cntl'
import { createSingleton } from 'src/functions/jsx-factory'
import { findChildren, mergeClass } from 'src/functions/jsx-helper'
import { isArray } from 'lodash-es'

type DivAttr = HTMLAttributes<HTMLDivElement>
export module Card {
  namespace Style {
    export const Container = cntl`
      relative
      flex
      flex-col
      rounded-md
      overflow-hidden
    `

    export const Image = cntl`
      h-full
    `

    export const Content = cntl`
      absolute
      bottom-0
    `

    export const Header = cntl`
      absolute
      top-0
    `
  }

  export const Container: FunctionComponent<DivAttr> = (props) => {
    const { class: cls, children, ...rest } = props
    const { content, image, header } = findChildren(children, {
      content: (child) => child.type === Content,
      image: (child) => child.type === Image,
      header: (child) => child.type === Header,
    })

    return (
      <div class={mergeClass(cls, Style.Container)} {...rest}>
        {header}
        {content}
        {image}
      </div>
    )
  }

  export const Header = createSingleton('div', {
    class: mergeClass('card-header', Style.Header),
  })

  export const Content = createSingleton('div', {
    class: mergeClass('card-content', Style.Content),
  })

  export const Image = createSingleton('img', {
    class: mergeClass('card-image', Style.Image),
  })
}
