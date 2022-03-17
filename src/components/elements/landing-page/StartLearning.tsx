import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'

export default function StartLearning() {
  return (
    <CardView
      id="start-learning"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Start learning"
      subtitle="See all classes"
    />
  )
}
