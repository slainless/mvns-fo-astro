import create from '@kodingdotninja/use-tailwind-breakpoint'
import screens from '@Styles/screen.cjs'

export function tw(...styles: string[]) {
  return styles.join(' ')
}

export const { useBreakpoint } = create(screens ?? {})
