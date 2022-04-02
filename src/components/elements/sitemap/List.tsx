import { Link } from '@Bits/Button'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'
type Props = HTMLAttr<'div'> & {
  items: [display: string, href: string][]
  title: string
  styleOverrides?: {
    container?: string
    title?: string
    list?: {
      style?: string
      item?: string
    }
  }
}

const ItemStyle = cntl`
  tracking-normal transition-colors
  text-white/50 before:h-[2px] before:bg-white/50 before:w-full
  before:absolute before:left-0 before:-bottom-1 hover:before:w-full
  before:transition-all 

  after:w-0 hover:text-white after:duration-500
`
export default function List(props: Props) {
  const { className, styleOverrides, items, title, ...rest } = props

  return (
    <div
      className={twMerge(
        'list flex flex-col gap-8',
        className,
        styleOverrides?.container
      )}
      {...rest}
    >
      <h2
        className={twMerge(
          'font-heading text-xl sm:text-2xl font-bold',
          styleOverrides?.title
        )}
      >
        {title}
      </h2>
      <ul
        className={twMerge(
          'flex flex-col sm:grid grid-cols-2 gap-y-3 max-w-3xl text-base sm:text-xl',
          styleOverrides?.list?.style
        )}
      >
        {items.map((item, key) => (
          <li key={item[0] + key}>
            <Link
              href={item[1]}
              className={twMerge(ItemStyle, styleOverrides?.list?.item)}
            >
              {item[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
