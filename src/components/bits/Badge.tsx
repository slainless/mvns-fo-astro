import { createSingleton } from '@Functions/jsx-factory'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const BaseStyle = cntl`
  badge w-max text-xs px-3 py-1 rounded-full
`

type Props = HTMLAttr<'a'>
export function Badge(props: Props) {
  const { className, children, ...rest } = props
  return (
    <a
      className={twMerge(BaseStyle, 'bg-white text-black', className)}
      {...rest}
    >
      {children}
    </a>
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
