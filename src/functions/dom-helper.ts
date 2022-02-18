type Position = {
  top: number
  right: number
  bottom: number
  left: number
}
export function getScrollPositionOf(
  el: HTMLElement
): { element: Position; view: Position } | null {
  const parent = el.parentElement
  if (parent == null) return null

  const elTop = el.offsetTop
  const elBottom = elTop + el.clientHeight
  const elLeft = el.offsetLeft
  const elRight = elLeft + el.clientWidth

  const viewTop = parent.scrollTop
  const viewBottom = viewTop + parent.clientHeight
  const viewLeft = parent.scrollLeft
  const viewRight = viewLeft + parent.clientWidth

  return {
    element: {
      top: elTop,
      bottom: elBottom,
      left: elLeft,
      right: elRight,
    },
    view: {
      top: viewTop,
      bottom: viewBottom,
      left: viewLeft,
      right: viewRight,
    },
  }
}

type VisibilityState<A extends string, B extends string> =
  | 'overflow'
  | 'visible'
  | `partial-${A}`
  | `partial-${B}`
  | 'hidden'
export function getScrollVisibilityState(el: HTMLElement) {
  const pos = getScrollPositionOf(el)
  if (pos == null) return null

  const { element: e, view: v } = pos
  const xState: VisibilityState<'left', 'right'> =
    e.left < v.left && e.right > v.right
      ? 'overflow'
      : e.left >= v.left && e.right <= v.right
      ? 'visible'
      : e.left < v.left && e.right > v.left
      ? 'partial-left'
      : e.left < v.right && e.right > v.right
      ? 'partial-right'
      : 'hidden'

  const yState: VisibilityState<'top', 'bottom'> =
    e.top < v.top && e.bottom > v.bottom
      ? 'overflow'
      : e.top >= v.top && e.bottom <= v.bottom
      ? 'visible'
      : e.top < v.top && e.bottom > v.top
      ? 'partial-top'
      : e.top < v.bottom && e.bottom > v.bottom
      ? 'partial-bottom'
      : 'hidden'

  return {
    x: xState,
    y: yState,
    pos,
  }
}

type PossibleElement = HTMLElement | Element | null
export async function fastChildrenCheck(
  parent: HTMLElement,
  predicate: (el: HTMLElement, parent: HTMLElement) => boolean
): Promise<HTMLElement | null> {
  const checked: Set<HTMLElement> = new Set()
  let foundEl: HTMLElement | null = null

  function loopParent(
    startEl: PossibleElement,
    nextEl: (current: HTMLElement) => PossibleElement
  ) {
    let current = startEl
    while (true) {
      if (foundEl) return
      if (current == null || !(current instanceof HTMLElement)) return
      const currentCheckedLength = checked.size
      checked.add(current)
      if (checked.size === currentCheckedLength) {
        return
      }

      if (predicate(current, parent)) {
        foundEl = current
        return
      }
      current = nextEl(current)
    }
  }

  await Promise.all([
    (async () => {
      let current = parent.firstElementChild
      loopParent(current, (c) => c.nextElementSibling)
    })(),
    (async () => {
      let current = parent.lastElementChild
      loopParent(current, (c) => c.previousElementSibling)
    })(),
  ])
  return foundEl
}
