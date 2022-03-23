import Button from './Button'
import Dialog, { OptionalProps } from './Dialog'
import { Common as Slider } from '@Bits/Slider'
import cntl from 'cntl'
import { Root as Separator } from '@radix-ui/react-separator'
import { useState } from 'react'
import Popover from './Popover'

type FeedbackProps = {
  title: string
  price: string
} & HTMLAttributes<HTMLDivElement>
function Feedback(props: FeedbackProps) {
  const { children, title, price, ...rest } = props
  return (
    <div
      className="px-3 py-2 border-[1px] flex flex-col rounded-lg flex-grow"
      {...rest}
    >
      <span className="text-xs">{title}</span>
      <span>{`$ ${price}`}</span>
    </div>
  )
}

const MAX_PRICE = 500
const MIN_PRICE = 0
const STEP = 1
export default function Pricing(props: OptionalProps) {
  const [values, setValues] = useState([MIN_PRICE, MAX_PRICE])
  return (
    <Popover
      {...props}
      title="Price range"
      trigger={<Button>Pricing</Button>}
      className="flex flex-col gap-5 w-96"
    >
      {/* <p>The average price of an experience is $26</p> */}
      <Slider
        thumbNum={2}
        max={MAX_PRICE}
        step={STEP}
        defaultValue={[MIN_PRICE, MAX_PRICE]}
        value={values}
        onValueChange={setValues}
        styleOverrides={{
          thumb: cntl`bg-red-600`,
        }}
        id="price-slider"
      />
      <div
        id="price-feedback"
        className="flex flex-row justify-between gap-2 items-center"
      >
        <Feedback
          title="Min. Price"
          price={values[0].toString() + (values[0] === MAX_PRICE ? '+' : '')}
        />
        <Separator className="w-2 h-[1px] bg-black" />
        <Feedback
          title="Max. Price"
          price={values[1].toString() + (values[1] === MAX_PRICE ? '+' : '')}
        />
      </div>
    </Popover>
  )
}
