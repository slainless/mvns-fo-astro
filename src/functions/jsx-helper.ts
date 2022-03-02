import { ReactNode, ReactChild, isValidElement, ReactElement } from 'react'
import { isArray, mapValues } from 'lodash-es'

export function mergeClass(...classes: (string | undefined | null)[]) {
  let finalCls = ''
  for (const cls of classes) {
    if (cls == null) continue
    finalCls += ` ${cls}`
  }
  return finalCls.trim()
}

type FindChildrenPredicates = {
  [k in string]: (child: ReactElement) => boolean
}
type FindChildrenReturns<T> = { [k in keyof T]: ReactElement | null }
export function findChildren<T extends FindChildrenPredicates>(
  children: ReactNode,
  predicates: T,
  extract?: false
): FindChildrenReturns<T>
export function findChildren<T extends FindChildrenPredicates>(
  children: ReactNode,
  predicates: T,
  extract: true
): FindChildrenReturns<T> & { other: ReactNode | null }
export function findChildren<T extends FindChildrenPredicates>(
  children: ReactNode,
  predicates: T,
  extract = false
): FindChildrenReturns<T> & { other?: ReactNode | null } {
  function runPredicates(child: ReactElement) {
    for (const key in predicates) {
      if (predicates[key](child)) return { [key]: child }
    }

    return null
  }

  if (!isArray(children)) {
    const A: FindChildrenReturns<T> = mapValues(predicates, () => null)

    if (!isValidElement(children)) {
      if (extract) return Object.assign(A, { other: children })
      else return A
    } else {
      const B = runPredicates(children)
      if (B == null) {
        if (extract) return Object.assign(A, { other: children })
        else return A
      } else return Object.assign(A, B)
    }
  } else {
  }

  const extracted: ReactChild[] = []
  const result: FindChildrenReturns<T> = mapValues(predicates, () => null)
  for (const child of children) {
    if (!isValidElement(child)) {
      if (extract) extracted.push(child)
      continue
    }
    const predicateResult = runPredicates(child)
    if (extract && predicateResult == null) extracted.push(child)
    Object.assign(result, predicateResult)
  }
  Object.assign(result, { other: extracted.length > 0 ? extracted : null })
  return result
}
