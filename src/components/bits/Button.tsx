import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { mergeClass } from '@Functions/jsx-helper'
import { twMerge } from 'tailwind-merge'
import { ReactHTML } from 'react'

type ButtonAttr = HTMLAttr<'button'>
export const Arrow: FunctionComponent<
  Omit<ButtonAttr & { type: 'next' | 'prev' }, 'children'>
> = (props) => {
  const { className: cls, type, ...rest } = props
  const style = cntl`
    bg-zinc-900/90
    backdrop-filter
    backdrop-blur-sm 
    text-white 
    flex
    rounded-full
    p-2
    shadow-md
    justify-center
    items-center
    text-2xl
  `

  return (
    <button {...rest} className={mergeClass('arrow', style, cls)}>
      <span className="material-icons-outlined">
        {type == 'next'
          ? 'navigate_next'
          : type == 'prev'
          ? 'navigate_before'
          : ''}
      </span>
    </button>
  )
}

export const Favorite: FunctionComponent<
  ButtonAttr & {
    filled?: boolean
    filledStyle?: string
    emptyStyle?: string
  }
> = (props) => {
  const { className: cls, filled, filledStyle, emptyStyle, ...rest } = props

  return (
    <button
      {...rest}
      className={twMerge(
        cntl`
          ${
            filled
              ? twMerge('text-red-600', filledStyle)
              : twMerge('text-white/50', emptyStyle)
          }
          text-2xl inline-flex items-center justify-center
          rounded-full w-10 h-10

          transition-all duration-300
          ${filled ? 'hover:bg-red-400/20' : 'hover:bg-white/20'}
        `,
        cls
      )}
    >
      <span className="material-icons-outlined">
        {filled ? 'favorite' : 'favorite_border'}
      </span>
    </button>
  )
}

type IconProps = {
  icon: string
  outlined?: boolean
  styleOverrides?: {
    icon?: string
  }
} & HTMLAttr<'button'>

export function Icon(props: IconProps) {
  const { outlined, icon, styleOverrides, className, ...rest } = props
  return (
    <button className={twMerge('text-2xl inline-flex', className)} {...rest}>
      <span
        className={twMerge(
          outlined === null || outlined
            ? 'material-icons-outlined'
            : 'material-icons',
          styleOverrides?.icon
        )}
      >
        {icon}
      </span>
    </button>
  )
}

type AnchorAttr = HTMLAttr<'a'>
type CommonProps = AnchorAttr & {}
export function Common(props: CommonProps) {
  const { className: cls, ...rest } = props
  return (
    <a
      {...rest}
      className={twMerge(
        `
        button flex items-center
        justify-center 
        bg-white text-black 
        font-medium tracking-widest text-xs 
        py-3 px-5 rounded-lg uppercase
        duration-300
        transition-all
        border-2 border-white

        hover:-translate-y-1
        hover:bg-transparent hover:text-white
        hover:shadow-lg hover:shadow-white/20
        cursor-pointer
      `,
        cls
      )}
    ></a>
  )
}

const BaseLinkStyle = cntl`
  text-red-500 tracking-wider relative
  after:content-[''] after:w-1/3 after:h-[2px] after:bg-red-600
  after:absolute after:left-0 after:-bottom-1 hover:after:w-full
  after:transition-all
`
type LinkProps = AnchorAttr & {
  href?: string
}
export function Link(props: LinkProps) {
  const { className: cls, ...rest } = props
  return <a {...rest} className={twMerge(BaseLinkStyle, cls)} />
}
