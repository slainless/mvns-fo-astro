import Section from '@Blocks/Section'
import cntl from 'cntl'
import { Badge } from '@Bits/Badge'
import { Favorite, Link } from '@Bits/Button'
import Separator from '@Bits/Separator'
import { Calendar, Quota } from '@Bits/Info'

type Props = {
  title: string
}
export default function Featured(props: Props) {
  const { title } = props
  return (
    <Section.Container id="featured-class">
      <Section.Title>{title ?? 'New classes added every month'}</Section.Title>
      <Section.Content
        id="featured-container"
        className={cntl`
          mt-7 lg:mt-12 
          relative 
          h-96 lg:h-[32rem]
          bg-cover bg-[center_left_-10rem] lg:bg-left
          rounded-lg lg:rounded-none
          flex flex-col items-end
        `}
        style={{ backgroundImage: `url('/media/featured-image.png')` }}
      >
        <div className="w-max p-5 z-10">
          <Favorite className="text-4xl" emptyStyle={cntl`text-white/50`} />
        </div>
        <div
          className={cntl`
            absolute top-0 right-0
            h-full
            w-full lg:w-96
            px-10 lg:px-0
            flex flex-col items-center justify-center text-center
          `}
        >
          <Badge>New</Badge>
          <h3
            id="featured-title"
            className="font-heading text-3xl uppercase mt-4"
          >
            Developing Entrepreneurial Mindset
          </h3>
          <Separator className="mt-7 mb-3" />
          <h4 id="featured-subtitle" className="leading-none">
            Chai Li
          </h4>
          <div className="flex gap-3 mt-2">
            <Quota filled={8} max={10} suffix="Students" />
            <Calendar>Jan 21-29, 22</Calendar>
          </div>
          <Link>
            <span className="material-icons mr-2 !text-xl">play_arrow</span>{' '}
            Watch Trailer
          </Link>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
