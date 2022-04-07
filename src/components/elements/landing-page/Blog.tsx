import Section from '@Blocks/Section'
import { Common as Swiper } from '@Blocks/Carousel'
import { Common as Card } from '@Blocks/Card'
import isBrowser from '@Functions/isBrowser'
import { SwiperOptions } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import cntl from 'cntl'
import CardView from '@Elements/CardView'
import { blogCards } from '@Dev/dummy'
import CardPreset, { CardViewProps } from '@Styles/card'
import { twMerge } from 'tailwind-merge'
import { merge, omit } from 'lodash-es'

export default function Blog() {
  const { styleOverrides, ...preset } = CardPreset.Large
  const override: CardViewProps = {
    swiperOptions: {
      rewind: false,
      loop: true,
      breakpoints: {
        0: {},
        375: {
          slidesPerView: 1.25,
        },
        475: {},
        640: {
          slidesPerView: 1.25,
        },
        768: {
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 1.5,
        },
        1280: {
          slidesPerGroup: 1,
          centeredSlides: true,
        },
      },
    },
  }

  return (
    <CardView
      {...merge({}, preset, override)}
      id="blog"
      title="Our blog"
      subtitle="See all"
      subtitleHref="/blog/all"
      classes={blogCards}
      styleOverrides={{
        swiper: {
          style: cntl`h-[20rem] xs:h-[20rem] sm:h-[24rem] md:h-[28rem] rounded-none sm:rounded-lg`,
          buttons: {
            style: cntl`hidden sm:flex`,
          },
        },
        card: {
          card: {
            content: cntl`p-10 items-start`,
          },
          title: cntl`text-left text-2xl drop-shadow-md`,
          date: cntl`text-md`,
        },
        section: {
          container: cntl`order-last`,
          content: cntl`-mr-5 xs:-mr-7 sm:mr-0`,
        },
      }}
    />
  )
}
