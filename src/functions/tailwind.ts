import create from '@kodingdotninja/use-tailwind-breakpoint'
import Config from '@/tailwind.config.mjs'

export function tw(...styles: string[]) {
  return styles.join(' ')
}

export const { useBreakpoint } = create(Config.theme.screens)
