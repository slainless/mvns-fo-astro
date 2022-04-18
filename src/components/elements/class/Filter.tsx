import Button from './Filter/Button'
import { Root as Separator } from '@radix-ui/react-separator'
import DateDialog from './Filter/Date'
import Popular from './Filter/Popular'
import Pricing from './Filter/Pricing'
import Rating from './Filter/Rating'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import CategoryBar from '@Elements/CategoryBar'
import CarouselBar from '@Elements/CarouselBar'

export default function Filter() {
  return (
    <div
      id="filter"
      className="flex flex-col md:flex-row md:items-center gap-x-5 gap-y-0"
    >
      <CarouselBar
        disableNav={true}
        className="shrink-0 order-last md:order-first"
      >
        <DateDialog />
        <Pricing />
        <Popular />
        <Rating />
      </CarouselBar>
      <Separator
        orientation="vertical"
        className="hidden md:block h-5 w-[1px] bg-white/50 shrink-0"
      />
      <CategoryBar className="order-first md:order-last" />
    </div>
  )
}
