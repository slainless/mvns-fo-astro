// import { ResponsiveObject, Settings } from 'react-slick'
// import resolveConfig from 'tailwindcss/resolveConfig'
import { map, isFunction } from 'lodash-es'
// import tailwindConfig from '../../tailwind.config.cjs'
// console.log(tailwindConfig)

// const fullConfig = resolveConfig(tailwindConfig)

// export function createSlickBreakpoint(
//   settings: Record<string, Settings>
// ): ResponsiveObject[] | null {
//   // console.log(fullConfig.theme.screens)
//   const breakpoints = fullConfig.theme.screens
//   if (isFunction(breakpoints)) return null
//   return map(settings, (v, k) => {
//     if (breakpoints == null) return null
//     return {
//       breakpoint: +breakpoints[k].replace(/[a-zA-Z]/g, ''),
//       settings: v,
//     }
//   }).filter((v) => v != null) as ResponsiveObject[]
// }

export type Mods<T extends Record<string, string>> = {
  mods: T
  parse: (mods?: OneOrMany<keyof T>) => Array<T[keyof T]>
}
export function createMods<T extends Record<string, string>>(mods: T): Mods<T> {
  return {
    mods,
    parse: (input) => {
      return Array.isArray(input)
        ? input.map((mod) => mods[mod])
        : typeof input == 'string'
        ? ([mods[input]] as T[keyof T][])
        : []
    },
  }
}
