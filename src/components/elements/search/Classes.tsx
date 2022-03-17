import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import cntl from 'cntl'
import { slimCard as Items } from '@Dev/dummy'

export default function Classes() {
  return (
    <CardView
      id="classes"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Classes"
      subtitle="7 Results"
      styleOverrides={{
        section: {
          title: {
            container: cntl`w-full justify-between`,
            // subtitle: cntl`flex-grow`,
          },
        },
      }}
    />
  )
}
