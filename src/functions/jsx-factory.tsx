import { h } from 'preact'
import { JSX } from 'preact'
import { mergeClass } from './jsx-helper'

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
 *    class: `container p-5`
 *  })
 * ```
 *
 * Later, we can call the singleton and add more classes:
 * ```tsx
 *  <main>
 *    <Container class="warning-box bg-yellow-300">
 *      <!-- content here -->
 *    </Container>
 *  </main>
 * ```
 *
 * When build, it will output:
 * ```tsx
 *  <main>
 *    <div class="container p-5 warning-box bg-yellow-300">
 *      <!-- content here -->
 *    </div>
 *  </main>
 * ```
 *
 * TODO: fix type to allow arbitrary attributes
 */
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
