import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { mergeClass } from '@Functions/jsx-helper'
import { twMerge } from 'tailwind-merge'
import { createElement, ReactHTML } from 'react'

type ButtonAttr = HTMLAttr<'button'>
type ArrowProps = Omit<ButtonAttr, 'children'> & { arrowType: 'next' | 'prev' }
export function Arrow(props: ArrowProps) {
  const { className: cls, arrowType, ...rest } = props
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
        {arrowType == 'next'
          ? 'navigate_next'
          : arrowType == 'prev'
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
        'button',
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
}

export function Icon<T extends keyof ReactHTML = 'button'>(
  props: IconProps & { as?: T } & HTMLAttr<T>
): JSX.Element {
  const {
    as: tag,
    outlined,
    icon,
    styleOverrides,
    className,
    children,
    ...rest
  } = props
  return createElement(tag ?? 'button', {
    className: twMerge(cntl`text-2xl inline-flex`, className),
    children: (
      <>
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
        {children}
      </>
    ),
    ...rest,
  })
}

const CommonMods = {
  'fill-red': cntl`bg-red-600 border-red-600 text-white`,
  'to-outline-red': cntl`hover:bg-transparent hover:border-red-600 hover:text-red-600 hover:shadow-red-600/30`,
  'to-fill-red': cntl`hover:bg-red-600 hover:border-red-600 hover:shadow-red-600/30`,

  'fill-black': cntl`bg-black text-white border-black`,
  'to-outline-black': cntl`hover:bg-transparent hover:border-black hover:text-black hover:shadow-black/20`,
  'to-fill-black': cntl`hover:bg-black hover:border-black hover:shadow-black/20`,

  'hover-darker-fill': cntl`hover:bg-black/30`,
  'hover-lighter-fill': cntl`hover:bg-white/30`,

  'no-translate': cntl`hover:translate-y-0`,
  'no-fill': cntl`bg-transparent`,
} as const
type CommonModsKeys = keyof typeof CommonMods

type AnchorAttr = HTMLAttr<'a'>
type CommonProps = AnchorAttr & {
  mods?: CommonModsKeys | CommonModsKeys[]
}
export function Common<T extends 'button' | 'a' = 'button'>(
  props: CommonProps & { as?: T } & HTMLAttr<T>
) {
  const { className: cls, mods, as, ...rest } = props
  return createElement(as ?? 'button', {
    ...rest,
    className: twMerge(
      cntl`
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
      ...(Array.isArray(mods)
        ? mods.map((k) => CommonMods[k])
        : typeof mods == 'string'
        ? [CommonMods[mods]]
        : ['']),
      cls
    ),
  })
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
