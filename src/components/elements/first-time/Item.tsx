import { Common as Checkbox } from '@Bits/Checkbox'
import { Label } from '@radix-ui/react-label'
import { twMerge } from 'tailwind-merge'
import cntl from 'cntl'

type Props = Omit<HTMLAttr<'span'>, 'ref'> & {
  title: string
  name: string
}
export default function Item(props: Props) {
  const { title, className, name, id, ...rest } = props
  return (
    <Label
      className={twMerge(
        'flex flex-row gap-5 justify-between px-8 py-10 rounded-lg border-2 border-white/10',
        className
      )}
      {...rest}
    >
      <span>{title}</span>
      <Checkbox
        name={name}
        id={id ?? name}
        className="border-white/30 hover:border-red-600 transition-colors"
        styleOverrides={{
          indicator: cntl`bg-red-600 border-red-600`,
        }}
      ></Checkbox>
    </Label>
  )
}
