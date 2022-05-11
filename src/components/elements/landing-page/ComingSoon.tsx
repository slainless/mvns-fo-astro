import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { largeCard as Items } from '@Dev/dummy'

export default function ComingSoon() {
  return (
    <CardView
      id="coming-soon"
      swiperOptions={{
        rewind: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
      }}
      classes={Items}
      title="Coming soon"
      subtitle="See all classes"
      subtitleHref="/class/all"
      styleOverrides={{
        swiper: {
          style: cntl`h-96`,
        },
        card: {
          card: {
            header: cntl`px-10`,
            content: cntl`px-10`,
          },
          favorite: cntl`text-4xl w-16 h-16`,
          title: cntl`text-3xl`,
          price: cntl`text-3xl`,
        },
      }}
    />
  )
}
