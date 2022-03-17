import Section from '@Blocks/Section'
import { Common as Card } from '@Blocks/Card'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import cntl from 'cntl'
import CardView from '../CardView'
import { largeCard as Items } from '@Dev/dummy'

const swiperOptions: SwiperOptions = {
  slidesPerView: 2,
  slidesPerGroup: 1,
  rewind: true,
}

export default function VideoOnDemand() {
  return (
    <CardView
      id="vod"
      title="Video on demand"
      subtitle="See all classes"
      subtitleHref="/class/all"
      styleOverrides={{
        card: {
          card: {
            header: cntl`p-8`,
          },
          favorite: cntl`text-4xl w-16 h-16`,
          title: cntl`text-4xl drop-shadow-md`,
          price: cntl`text-3xl drop-shadow-md`,
        },
      }}
      classes={Items}
      swiperOptions={swiperOptions}
    />
  )
}
