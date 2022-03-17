import cntl from 'cntl'
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
type InputProps = HTMLAttr<'input'>
export function Common(props: InputProps) {
  const { className, ...rest } = props
  return <input className={twMerge(CommonStyle, className)} {...rest}></input>
}
