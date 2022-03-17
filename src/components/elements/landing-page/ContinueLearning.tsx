import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'

export default function ContinueLearning() {
  return (
    <CardView
      id="continue-learning"
      swiperOptions={{
        rewind: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
      }}
      classes={Items}
      title="Continue Learning"
      // subtitle="See all classes"
      styleOverrides={{
        swiper: cntl`h-96`,
        card: {
          card: {
            header: cntl`px-10`,
            content: cntl`px-10`,
          },
          favorite: cntl`text-4xl`,
          title: cntl`text-3xl`,
          price: cntl`text-3xl`,
        },
      }}
    />
  )
}
