import Section from '@Blocks/Section'
import { Common as Info } from '@Bits/Info'
import * as Avatar from '@radix-ui/react-avatar'
import cntl from 'cntl'
import { Common as Button, Icon } from '@Bits/Button'

const template = Array(6)
  .fill(0)
  .map(
    (item) =>
      ({
        user: 'Kathryn',
        date: 'December 2021',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis varius cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae ...',
      } as ReviewItemProps)
  )
type ReviewItemProps = HTMLAttributes<HTMLDivElement> & {
  user: string
  date: string
  desc: string
}
function ReviewItem(props: ReviewItemProps) {
  const { user, date, desc } = props

  return (
    <div className="review-item flex flex-col gap-3">
      <div className="review-header flex flex-row gap-5 items-center">
        <Avatar.Root className="review-avatar w-16 rounded-full overflow-hidden">
          <Avatar.Image src="/media/avatar (1).png" />
        </Avatar.Root>
        <div className="review-authorship flex flex-col">
          <span className="review-author font-bold text-lg">{user}</span>
          <div>
            <div className="review-rating flex flex-row gap-0">
              <Icon icon="star" className="text-base text-red-600" />
              <Icon icon="star" className="text-base text-red-600" />
              <Icon icon="star" className="text-base text-red-600" />
              <Icon icon="star" className="text-base text-red-600" />
              <Icon icon="star" className="text-base text-gray-500" />
            </div>
            <span className="review-date text-gray-500 text-sm">{date}</span>
          </div>
        </div>
      </div>
      <div className="review-content text-white/70">
        <p>{desc}</p>
        <button className="flex items-center gap-2 text-xl">
          <span className="underline text-base font-medium text-white hover:text-red-600 transition-colors">
            See more
          </span>
          {/* <span className="material-icons-outlined">chevron_right</span> */}
        </button>
      </div>
      <div className="review-footer"></div>
    </div>
  )
}

export default function Review() {
  return (
    <Section.Container id="the-review">
      <Section.Title id="the-review-title" className="lg:text-3xl">
        Reviews
      </Section.Title>
      <Section.Content className="flex flex-col gap-5 sm:gap-10 max-w-4xl items-center">
        <div id="review-info" className="flex flex-row self-start gap-5">
          <Info
            icon="star"
            className="text-xl sm:text-2xl"
            styleOverrides={{
              icon: cntl`text-yellow-500`,
            }}
          >
            <span className="font-bold">4.8</span> (31 Reviews)
          </Info>
          {/* <a className="underline">See all reviews</a> */}
        </div>
        <div
          id="review"
          className="flex flex-col sm:grid grid-cols-2 gap-y-10 sm:gap-x-14 md:gap-x-20 lg:gap-x-32"
        >
          {template.map((item, key) => (
            <ReviewItem key={item.user + key} {...item}></ReviewItem>
          ))}
        </div>
        <Button
          as="a"
          className="w-max border-transparent bg-transparent text-white hover:border-white"
        >
          Load More
        </Button>
      </Section.Content>
    </Section.Container>
  )
}
