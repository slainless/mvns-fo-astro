import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'

export default function MostRelevant() {
  return (
    <CardView
      id="most-relevant"
      swiperOptions={{
        rewind: true,
      }}
      classes={Items}
      title="Most Relevant"
      subtitle="See all classes"
      subtitleHref="/class/all"
    />
  )
}
