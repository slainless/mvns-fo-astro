import { h } from 'preact'
import { JSX } from 'preact'
import { mergeClass } from './jsx-helper'

export function createSingleton<T extends keyof JSX.IntrinsicElements>(
  type: T,
  defaultProps: JSX.IntrinsicElements[T]
): FunctionComponent<JSX.IntrinsicElements[T]> {
  return (props) => {
    const { class: defC, ...defRest } = defaultProps
    const { class: c, ...rest } = props
    const newRest: Record<string, any> = Object.assign({}, defRest, rest, {
      class: mergeClass(c, defC),
    })

    return h(type, newRest)
  }
}
