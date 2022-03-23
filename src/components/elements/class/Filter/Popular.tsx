import Button from './Button'
import Dialog, { OptionalProps } from './Dialog'
import { Common as Checkbox } from '@Bits/Checkbox'
import { Root as Label } from '@radix-ui/react-label'
import cntl from 'cntl'
import Popover from './Popover'

const FieldStyle = cntl`flex flex-row gap-2`

export default function Popular(props: OptionalProps) {
  return (
    <Popover
      {...props}
      title="Most Popular Class"
      trigger={<Button>Popular</Button>}
      className="flex flex-row gap-5"
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
