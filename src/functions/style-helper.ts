import { ResponsiveObject, Settings } from 'react-slick'
import resolveConfig from 'tailwindcss/resolveConfig'
import { map, isFunction } from 'lodash-es'
import cjs from '@/require'
const tailwindConfig = cjs('./tailwind.config.cjs')

const fullConfig = resolveConfig(tailwindConfig)

export function createSlickBreakpoint(
  settings: Record<string, Settings>
): ResponsiveObject[] | null {
  // console.log(fullConfig.theme.screens)
  const breakpoints = fullConfig.theme.screens
  if (isFunction(breakpoints)) return null
  return map(settings, (v, k) => {
    if (breakpoints == null) return null
    return {
      breakpoint: +breakpoints[k].replace(/[a-zA-Z]/g, ''),
      settings: v,
    }
  }).filter((v) => v != null) as ResponsiveObject[]
}
