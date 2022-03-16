import * as Checkbox from '@radix-ui/react-checkbox'
import cntl from 'cntl'

const RootStyle = cntl`
  w-6 h-6
  border-2 border-black/50
  flex items-center justify-center
  hover:bg-black/10
  focus:ring-1
  outline-none
  rounded-md
`

type Props = Parameters<typeof Checkbox.Root>[0]
export function Common(props: Props) {
  return (
    <Checkbox.Root className={RootStyle}>
      <Checkbox.Indicator className="select-none pointer-events-none">
        <span className="material-icons-outlined">check</span>
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}
