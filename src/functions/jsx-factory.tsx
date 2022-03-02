import { createElement, ReactHTML, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

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
      className: twMerge(c, defC),
    })

    return createElement(type, newRest)
  }
}
