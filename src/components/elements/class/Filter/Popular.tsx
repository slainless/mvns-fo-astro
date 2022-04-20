import Button from './Button'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Root as Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import Popover, { OptionalProps } from './Popover'

const FieldStyle = cntl`flex flex-row gap-10 sm:gap-2`

export default function Popular(props: OptionalProps) {
  return (
    <Popover
      {...props}
      title="Most Popular Class"
      trigger={<Button>Popular</Button>}
      className="flex flex-col sm:flex-row gap-x-5 gap-y-3"
      onReset={() => {}}
    >
      <div className={FieldStyle}>
        <Checkbox id="live-class-check" />
        <Label htmlFor="live-class-check">Live Class</Label>
      </div>
      <div className={FieldStyle}>
        <Checkbox id="on-demand-check" />
        <Label htmlFor="on-demand-check">Recording Class</Label>
      </div>
    </Popover>
  )
}
