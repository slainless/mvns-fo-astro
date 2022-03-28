import { createElement, ReactHTML, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { isPlainObject, isString, merge, mergeWith } from 'lodash-es'

/**
 * Create a singleton function factory with initial attributes that can
 * be overridden.
 *
 * Except for class, which will be merged. Designed this way to accomodate
 * tailwind methodology and at the same time provide typing support to
 * extendable function components
 *
 * Example, create `div` singleton with default class `container p-5`:
 * ```ts
 *  const Container = createSingleton('div', {
 *    className: `container p-5`
 *  })
 * ```
 *
 * Later, we can call the singleton and add more classes:
 * ```tsx
 *  <main>
 *    <Container className="warning-box bg-yellow-300">
 *      <!-- content here -->
 *    </Container>
 *  </main>
 * ```
 *
 * When build, it will output:
 * ```tsx
 *  <main>
 *    <div className="container p-5 warning-box bg-yellow-300">
 *      <!-- content here -->
 *    </div>
 *  </main>
 * ```
 *
 * TODO: fix type to allow arbitrary attributes
 */
export function createSingleton<T extends keyof ReactHTML>(
  type: T,
  defaultProps: HTMLAttributes<ReactHTML[T]>
): FunctionComponent<HTMLAttributes<ReactHTML[T]>> {
  return (props) => {
    const { className: defC, ...defRest } = defaultProps
    const { className: c, ...rest } = props
    const newRest: Record<string, any> = Object.assign({}, defRest, rest, {
      className: twMerge(defC, c),
    })

    return createElement(type, newRest)
  }
}

type StyleOverride = { [x in string]: StyleOverride } | string | undefined
function styleMerger(val: StyleOverride, val2: StyleOverride): StyleOverride {
  if (val == null) return val2
  if (val2 == null) return val

  if (isString(val) && isString(val2)) return twMerge(val, val2)
  if (isPlainObject(val) && isPlainObject(val2))
    return mergeWith({}, val, val2, styleMerger)
}
export function createOverride<T extends (props: any) => JSX.Element>(
  factory: T,
  overrides: Partial<Parameters<T>[0]>
) {
  return (props: Parameters<T>[0]): JSX.Element => {
    const { className, styleOverrides, ...rest } = overrides
    const {
      className: className2,
      styleOverrides: styleOverrides2,
      ...rest2
    } = props
    const $rest = merge({}, rest, rest2)
    const $className = twMerge(className, className2)
    const $styleOverrides =
      styleOverrides != null && styleOverrides2 != null
        ? mergeWith(styleOverrides, styleOverrides2, styleMerger)
        : styleOverrides == null
        ? styleOverrides2
        : styleOverrides

    return createElement(factory, {
      className: $className,
      styleOverrides: $styleOverrides,
      ...$rest,
    })
  }
}
