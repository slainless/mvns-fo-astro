import { Badge } from '@Bits/Badge'
import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {}
const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, className, ...rest } = props
    return (
      <button
        ref={ref}
        {...rest}
        className={twMerge(
          'text-sm py-1 font-heading border-2 border-white flex shrink-0',
          'bg-white text-black rounded-full px-3',
          'hover:bg-transparent hover:shadow-md hover:shadow-white/30 hover:text-white transition-all duration-300',
          className
        )}
      >
        {children}
      </button>
    )
  }
)

export default Button
