import Section from '@Blocks/Section'
import cntl from 'cntl'
import { Badge } from '@Bits/Badge'
import { Favorite, Common as Button } from '@Bits/Button'
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
          h-[28rem] sm:h-[32rem]
          rounded-lg lg:rounded-none
          flex flex-col items-end
          overflow-hidden
        `}
      >
        <div id="featured-container-bg" className="contents">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-[center_left_-12rem] lg:bg-left rounded-lg"
            style={{ backgroundImage: `url('/media/featured-image.png')` }}
          />
          <div className="absolute inset-0 w-full h-full from-transparent to-black/80 bg-gradient-to-b lg:hidden" />
        </div>
        <div className="w-max p-5 z-10">
          <Favorite
            className="text-4xl w-14 h-14"
            emptyStyle={cntl`text-white/50`}
          />
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
            className="font-heading text-3xl uppercase mt-4 font-bold"
          >
            Politics: Inclusive Leadership
          </h3>
          <Separator className="mt-7 mb-3" />
          <h4 id="featured-subtitle" className="leading-none">
            Bill Clinton
          </h4>
          <div className="flex gap-3 mt-2">
            {/* <Quota filled={8} max={10} suffix="Students" /> */}
            <Calendar>Jan 21-29, 22</Calendar>
          </div>
          <Button className="mt-4">
            <span className="material-icons mr-2 !text-xl">play_arrow</span>{' '}
            Watch Trailer
          </Button>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
