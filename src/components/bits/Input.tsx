import cntl from 'cntl'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const CommonStyle = cntl`
  transition-colors
  outline-none
  px-5 py-2.5
  font-heading
  border-2 border-gray-300 rounded-md
  focus:border-red-600
  text-sm
`
type InputProps = Omit<HTMLAttr<'input'>, 'ref'>
export const Common = forwardRef((props: InputProps, ref: any) => {
  const { className, ...rest } = props
  return (
    <input
      className={twMerge(CommonStyle, className)}
      ref={ref}
      {...rest}
    ></input>
  )
})
