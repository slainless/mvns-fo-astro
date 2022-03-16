import Button from './Button'
import Dialog, { OptionalProps } from './Dialog'
import { Common as Slider } from '@Bits/Slider'
import cntl from 'cntl'
import { Root as Separator } from '@radix-ui/react-separator'

type FeedbackProps = {
  title: string
  price: string
} & HTMLAttributes<HTMLDivElement>
function Feedback(props: FeedbackProps) {
  const { children, title, price, ...rest } = props
  return (
    <div
      className="px-3 py-2 border-[1px] border-black/20 flex flex-col rounded-lg flex-grow"
      {...rest}
    >
      <span className="text-xs">{title}</span>
      <span>{`$ ${price}`}</span>
    </div>
  )
}

export default function Pricing(props: OptionalProps) {
  return (
    <Dialog
      {...props}
      title="Price range"
      trigger={<Button>Pricing</Button>}
      className="flex flex-col gap-5"
    >
      <p>The average price of an experience is $26</p>
      <Slider
        thumbNum={2}
        max={100}
        step={1}
        defaultValue={[25, 75]}
        styleOverrides={{
          thumb: cntl`bg-red-600`,
        }}
        id="price-slider"
      />
      <div
        id="price-feedback"
        className="flex flex-row justify-between gap-2 items-center"
      >
        <Feedback title="Min. Price" price="1" />
        <Separator className="w-2 h-[1px] bg-black" />
        <Feedback title="Max. Price" price="100 +" />
      </div>
    </Dialog>
  )
}
