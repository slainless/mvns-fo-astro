import { Common as Checkbox } from '@Bits/Checkbox'
import { Label } from '@radix-ui/react-label'
import { twMerge } from 'tailwind-merge'
import cntl from 'cntl'
import { ElementRef, forwardRef } from 'react'

type Props = Omit<Parameters<typeof Checkbox>[0], 'ref'> & {
  title: string
}
const Item = forwardRef<ElementRef<'button'>, Props>((props, ref) => {
  const { title, className, ...rest } = props
  return (
    <Label
      className={twMerge(
        'flex flex-row gap-5 justify-between items-center px-8 py-10 rounded-lg border-2 border-white/10',
        className
      )}
    >
      <span>{title}</span>
      <Checkbox
        className="border-white/30 hover:border-red-600 transition-colors"
        styleOverrides={{
          indicator: cntl`bg-red-600 border-red-600`,
        }}
        ref={ref}
        {...rest}
      ></Checkbox>
    </Label>
  )
})

export default Item
