import { Arrow } from '@Bits/Button'
import cntl from 'cntl'
import { twMerge } from 'tailwind-merge'

type ButtonAttr = HTMLAttributes<HTMLButtonElement>
function NumericButton(
  props: ButtonAttr & {
    active?: boolean
  }
) {
  const { className, children, active } = props
  const Style = cntl`
    flex items-center justify-center
    h-8 w-8
    bg-transparent
    border-2
    border-white
    rounded-full
    leading-none
  `

  return (
    <button
      className={twMerge(
        Style,
        className,
        active ? `bg-red-600 text-white border-red-600` : ``
      )}
    >
      {children}
    </button>
  )
}

const ArrowStyle = cntl`
  w-9
  h-9
  text-sm
  bg-white
  text-black
`
export default function Pagination() {
  return (
    <div className="pagination flex items-center gap-3">
      <Arrow type="prev" className={ArrowStyle}></Arrow>
      <NumericButton active>1</NumericButton>
      <NumericButton>2</NumericButton>
      <NumericButton>3</NumericButton>
      <Arrow type="next" className={ArrowStyle}></Arrow>
    </div>
  )
}
