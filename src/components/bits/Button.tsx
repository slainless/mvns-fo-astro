import cntl from 'cntl'
import { createSingleton } from '@Functions/jsx-factory'
import { mergeClass } from '@Functions/jsx-helper'

type ButtonAttr = HTMLAttributes<HTMLButtonElement>
export const ArrowButton: FunctionComponent<
  Omit<ButtonAttr & { type: 'next' | 'prev' }, 'children'>
> = (props) => {
  const { class: cls, type, ...rest } = props
  const style = cntl`
    dark:bg-white 
    dark:text-black 
    flex
    rounded-full
    p-2
    shadow-md
    justify-center
    items-center
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
