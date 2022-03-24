import { Arrow } from '@Bits/Button'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

const ButtonStyle = cntl`
  flex items-center justify-center
  h-8 w-8
  bg-transparent
  border-2
  border-white
  rounded-full
  leading-none
`
type ButtonProps = HTMLAttr<'button'> & {
  active?: boolean
  activeStyle?: string
}
function Button(props: ButtonProps) {
  const { className, children, active, activeStyle } = props

  return (
    <button
      className={twMerge(
        ButtonStyle,
        className,
        active
          ? twMerge(`bg-red-600 text-white border-red-600`, activeStyle)
          : ``
      )}
    >
      {children}
    </button>
  )
}

const ArrowStyle = cntl`
  w-9
  h-9
  text-sm
  bg-white
  text-black
`
type PaginationProps = HTMLAttr<'div'> & {
  styleOverrides?: {
    container?: string
    arrow?: string
    button?: {
      style?: string
      active?: string
    }
  }
}
export default function Pagination(props: PaginationProps) {
  const { className, styleOverrides, ...rest } = props
  return (
    <div
      className={twMerge(
        'pagination flex items-center gap-3',
        className,
        styleOverrides?.container
      )}
      {...rest}
    >
      <Arrow
        arrowType="prev"
        className={twMerge(ArrowStyle, styleOverrides?.arrow)}
      ></Arrow>
      <Button
        active
        className={styleOverrides?.button?.style}
        activeStyle={styleOverrides?.button?.active}
      >
        1
      </Button>
      <Button
        className={styleOverrides?.button?.style}
        activeStyle={styleOverrides?.button?.active}
      >
        2
      </Button>
      <Button
        className={styleOverrides?.button?.style}
        activeStyle={styleOverrides?.button?.active}
      >
        3
      </Button>
      <Arrow
        arrowType="next"
        className={twMerge(ArrowStyle, styleOverrides?.arrow)}
      ></Arrow>
    </div>
  )
}
