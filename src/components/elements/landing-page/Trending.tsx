import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'

export default function Trending() {
  return (
    <CardView
      id="trending"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Trending live classes"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
