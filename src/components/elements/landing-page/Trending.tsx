import Section from '@Blocks/Section'
import { SwiperSlide } from 'swiper/react'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import CardView from '@Elements/CardView'
import { slimCard as Items } from '@Dev/dummy'
import cntl from 'cntl'

export default function Trending() {
  return (
    <CardView
      id="trending"
      swiperOptions={{
        rewind: true,
        breakpoints: {
          0: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          475: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        },
      }}
      classes={Items}
      title="Trending live classes"
      subtitle="See all classes"
      subtitleHref="/class/all"
      styleOverrides={{
        swiper: {
          style: cntl`rounded-none`,
          buttons: {
            style: cntl`hidden sm:flex`,
          },
        },
        section: {
          content: cntl`-mr-5 xs:-mr-7 sm:mr-0`,
        },
      }}
    />
  )
}
