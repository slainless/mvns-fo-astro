import Button from './Filter/Button'
import { Root as Separator } from '@radix-ui/react-separator'
import DateDialog from './Filter/Date'
import Popular from './Filter/Popular'
import Pricing from './Filter/Pricing'
import Rating from './Filter/Rating'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import CategoryBar from '@Elements/CategoryBar'

const Tags = [
  'Finance & Accounting',
  'IT & Software',
  'Personal Development',
  'Health & Fitness',
  'Politic & Government',
]

export default function Filter() {
  return (
    <div id="filter" className="flex items-center gap-5">
      <div id="filter-list" className="flex gap-2 shrink-0">
        <DateDialog />
        <Pricing />
        <Popular />
        <Rating />
      </div>
      <Separator
        orientation="vertical"
        className="h-5 w-[1px] bg-white/50 shrink-0"
      />
      <CategoryBar />
      {/* <div id="tag-list" className="flex flex-row gap-5 flex-grow">
        <div id="tag-active" className="w-max shrink-0">
          <span className="underline underline-offset-4 w-max">
            <span className="material-icons-outlined underline">
              work_outline
            </span>{' '}
            Business
          </span>
        </div>
      </div> */}
    </div>
  )
}
