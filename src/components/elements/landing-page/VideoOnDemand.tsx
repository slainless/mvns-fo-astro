import Section from '@Blocks/Section'
import { Common as Card } from '@Blocks/Card'
import { Common as Swiper } from '@Blocks/Carousel'
import { SwiperSlide } from 'swiper/react'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import cntl from 'cntl'
import CardView from '../CardView'
import { largeCard as Items } from '@Dev/dummy'

const swiperOptions: SwiperOptions = {}

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
            header: cntl`xs:p-8`,
          },
          favorite: cntl`xs:text-3xl md:text-4xl xs:w-16 xs:h-16`,
          title: cntl`xs:text-3xl md:text-4xl`,
          price: cntl`xs:text-2xl md:text-3xl`,
        },
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
      classes={Items}
      swiperOptions={{
        rewind: true,
        breakpoints: {
          0: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
          },
          475: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      }}
    />
  )
}
