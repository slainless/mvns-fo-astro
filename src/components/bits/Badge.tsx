import { createSingleton } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const BaseStyle = cntl`
  badge w-max text-xs px-3 py-1 rounded-full
`

type SpanAttr = HTMLAttributes<HTMLSpanElement>
export function Badge(props: SpanAttr) {
  const { className, children } = props
  return (
    <span className={twMerge(BaseStyle, 'bg-white text-black', className)}>
      {children}
    </span>
  )
}

export const InvertedBadge = createSingleton('span', {
  className: twMerge(
    BaseStyle,
    cntl`
      bg-transparent text-white border-2 border-white
    `
  ),
})
