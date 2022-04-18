import { Arrow, Common as Button, Icon } from '@Bits/Button'
import CarouselBar from './CarouselBar'

const categories = [
  ['Design'],
  ['Personal Development'],
  ['IT & Software'],
  ['Business & Policy'],
  ['Marketing'],
  ['Photography & Video'],
  ['Teaching & Academics'],
  ['Health & Fitness'],
  ['Finance & Accounting'],
]

type Props = Omit<Parameters<typeof CarouselBar>[0], 'children'>
export default function CategoryBar(props: Props) {
  const { ...rest } = props
  return (
    <CarouselBar {...rest}>
      {categories.map((category) => (
        <Button
          key={category[0]}
          mods={['no-translate', 'no-fill', 'to-fill-red']}
          className="shrink-0 text-white rounded-full normal-case text-sm py-1 px-4 snap-start"
        >
          {category[0]}
        </Button>
      ))}
    </CarouselBar>
  )
}
