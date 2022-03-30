import Section from '@Blocks/Section'
import Item from './Item'
import { Common as Button } from '@Bits/Button'

const categories = [
  ['Design', 'design'],
  ['Personal Development', 'personal-development'],
  ['IT & Software', 'it-software'],
  ['Business & Policy', 'business-policy'],
  ['Marketing', 'marketing'],
  ['Photography & Video', 'photography-video'],
  ['Teaching & Academics', 'teaching-academics'],
  ['Health & Fitness', 'health-fitness'],
  ['Finance & Accounting', 'finance-accounting'],
]

type Props = HTMLAttr<'div'>
export default function FirstTime(props: Props) {
  return (
    <Section.Container className="flex flex-col items-center gap-8">
      <Section.Title>What topics do you find interesting?</Section.Title>
      <Section.Content className="grid grid-cols-3 gap-x-2 gap-y-8">
        {categories.map((category) => (
          <Item name={category[1]} title={category[0]} key={category[1]}></Item>
        ))}
      </Section.Content>
      <Button
        type="submit"
        className="w-32"
        mods={['fill-red', 'to-outline-red', 'hover-darker-fill']}
      >
        Next
      </Button>
    </Section.Container>
  )
}
