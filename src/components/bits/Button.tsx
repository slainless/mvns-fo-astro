import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { mergeClass } from '@Functions/jsx-helper'
import { twMerge } from 'tailwind-merge'

type ButtonAttr = HTMLAttributes<HTMLButtonElement>
export const Arrow: FunctionComponent<
  Omit<ButtonAttr & { type: 'next' | 'prev' }, 'children'>
> = (props) => {
  const { class: cls, type, ...rest } = props
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
    <button {...rest} class={mergeClass('arrow', style, cls)}>
      <span class="material-icons-outlined">
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
  const { class: cls, filled, filledStyle, emptyStyle, ...rest } = props

  return (
    <button
      {...rest}
      class={twMerge(
        cntl`
          ${
            filled
              ? filledStyle ?? 'text-red-500'
              : emptyStyle ?? 'text-white/50'
          }
          text-2xl inline-flex drop-shadow-sm
        `,
        cls
      )}
    >
      <span class="material-icons-outlined">
        {filled ? 'favorite' : 'favorite_border'}
      </span>
    </button>
  )
}

type AnchorAttr = HTMLAttributes<HTMLAnchorElement>
export const Link: FunctionComponent<AnchorAttr> = (props) => {
  const { class: cls, ...rest } = props
  return (
    <a
      {...rest}
      class={twMerge(
        `
        mt-4 button flex items-center 
        bg-white text-black 
        font-medium tracking-widest text-xs 
        py-3 px-5 rounded-lg uppercase
      `,
        cls
      )}
    ></a>
  )
}
