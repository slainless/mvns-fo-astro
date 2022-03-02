import { twMerge } from 'tailwind-merge'

type HRAttr = HTMLAttributes<HTMLHRElement>
const Separator: FunctionComponent<HRAttr> = (props) => {
  const { className: cls, ...rest } = props
  return (
    <hr
      {...rest}
      className={twMerge(`w-4 mx-auto border-2 border-white`, cls)}
    />
  )
}

export default Separator
