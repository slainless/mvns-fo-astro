import { Badge } from '@Bits/Badge'
import { ForwardedRef, forwardRef } from 'react'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {}
const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, ...rest } = props
    return (
      <button ref={ref} {...rest}>
        <Badge className="text-sm py-1 border-2 border-gray-300">
          {children}
        </Badge>
      </button>
    )
  }
)

export default Button
